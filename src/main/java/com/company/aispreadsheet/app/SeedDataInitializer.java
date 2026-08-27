package com.company.aispreadsheet.app;

import com.company.aispreadsheet.entity.CharacteristicType;
import com.company.aispreadsheet.entity.Employee;
import com.company.aispreadsheet.entity.EmployeeType;
import com.company.aispreadsheet.entity.MeasurementCharacteristic;
import com.company.aispreadsheet.entity.MeasurementReport;
import com.company.aispreadsheet.entity.ReportResult;
import com.company.aispreadsheet.entity.Spindle;
import io.jmix.core.DataManager;
import io.jmix.core.SaveContext;
import io.jmix.core.security.SystemAuthenticator;
import io.jmix.flowui.UiEventPublisher;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.context.event.ApplicationStartedEvent;
import org.springframework.context.ApplicationEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Random;
import java.util.Set;

/**
 * Seeds master data on startup: 10 spindles (DMU-01..DMU-10), 15 operators
 * (OP-001..OP-015), 3 CMM inspectors (QA-001..QA-003) and a week of measurement
 * reports (125 blades x 90 characteristics). Each set is inserted only when its
 * table is completely empty; a non-empty table is never touched, so deleted seed
 * records are not recreated.
 *
 * <p>Measurement seed model: 420 mm gas turbine blades, one blade per spindle per
 * 8-hour shift, spread over 7 days across 3 shifts with operators assigned per
 * spindle+shift and one inspector per shift. Values are drawn at 4-sigma process
 * capability, except DMU-01 which runs at 3 sigma (occasional natural
 * out-of-tolerance) and DMU-02 which stays in tolerance but drifts steadily
 * towards the upper limit with each blade (tool-wear trend). A few reports get
 * the usual deliberate out-of-tolerance cooling-hole/profile characteristics.</p>
 */
@Component
public class SeedDataInitializer {

    private static final Logger log = LoggerFactory.getLogger(SeedDataInitializer.class);

    private static final String[][] OPERATORS = {
            {"OP-001", "James", "Barnes"},
            {"OP-002", "Peter", "Clarke"},
            {"OP-003", "Susan", "Davies"},
            {"OP-004", "Mark", "Evans"},
            {"OP-005", "Laura", "Foster"},
            {"OP-006", "Tom", "Griffiths"},
            {"OP-007", "Alan", "Harris"},
            {"OP-008", "Irene", "Jackson"},
            {"OP-009", "Kevin", "Lewis"},
            {"OP-010", "Nina", "Morgan"},
            {"OP-011", "Oliver", "Owens"},
            {"OP-012", "Paul", "Price"},
            {"OP-013", "Rachel", "Roberts"},
            {"OP-014", "Steven", "Turner"},
            {"OP-015", "Wendy", "Walker"}
    };

    private static final String[][] INSPECTORS = {
            {"QA-001", "David", "Hughes"},
            {"QA-002", "Emma", "Bennett"},
            {"QA-003", "Frank", "Murphy"}
    };

    /** Snapshot of the seeding progress, for views opened while seeding runs. */
    public record Progress(boolean inProgress, SeedDataProgressEvent.@org.jspecify.annotations.Nullable Stage stage,
                           int current, int total, @org.jspecify.annotations.Nullable String item) {
    }

    private final DataManager dataManager;
    private final SystemAuthenticator systemAuthenticator;
    private final UiEventPublisher uiEventPublisher;

    private volatile Progress progress = new Progress(false, null, 0, 0, null);

    public SeedDataInitializer(DataManager dataManager, SystemAuthenticator systemAuthenticator,
                               UiEventPublisher uiEventPublisher) {
        this.dataManager = dataManager;
        this.systemAuthenticator = systemAuthenticator;
        this.uiEventPublisher = uiEventPublisher;
    }

    public Progress getProgress() {
        return progress;
    }

    @EventListener
    public void onApplicationStarted(ApplicationStartedEvent event) {
        systemAuthenticator.withSystem(() -> {
            seedSpindles();
            seedEmployees();
            seedMeasurementReports();
            return null;
        });
    }

    private void seedSpindles() {
        Long count = dataManager.loadValue("select count(e) from Spindle e", Long.class).one();
        if (count > 0) {
            return;
        }

        publishProgress(SeedDataProgressEvent.Stage.SPINDLES, 0, 0, null);

        SaveContext saveContext = new SaveContext();
        for (int i = 1; i <= 10; i++) {
            Spindle spindle = dataManager.create(Spindle.class);
            spindle.setNumberMark(String.format("DMU-%02d", i));
            spindle.setType(i <= 6 ? "DMG DMU 160 P" : "Hermle C 62 U");
            spindle.setActive(true);
            saveContext.saving(spindle);
        }
        dataManager.save(saveContext);
        log.info("Seeded 10 spindles");
    }

    private void seedEmployees() {
        Long count = dataManager.loadValue("select count(e) from Employee e", Long.class).one();
        if (count > 0) {
            return;
        }

        publishProgress(SeedDataProgressEvent.Stage.EMPLOYEES, 0, 0, null);

        SaveContext saveContext = new SaveContext();
        addEmployees(saveContext, OPERATORS, EmployeeType.OPERATOR);
        addEmployees(saveContext, INSPECTORS, EmployeeType.INSPECTOR);
        dataManager.save(saveContext);
        log.info("Seeded {} employees", OPERATORS.length + INSPECTORS.length);
    }

    private void addEmployees(SaveContext saveContext, String[][] rows, EmployeeType type) {
        for (String[] row : rows) {
            Employee employee = dataManager.create(Employee.class);
            employee.setEmployeeId(row[0]);
            employee.setFirstName(row[1]);
            employee.setLastName(row[2]);
            employee.setType(type);
            employee.setActive(true);
            saveContext.saving(employee);
        }
    }

    // Measurement seed data ---------------------------------------------------

    private static final int REPORT_COUNT = 125;
    private static final int SEED_DAYS = 7;
    private static final int MACHINING_HOURS = 8;
    private static final String[] SHIFTS = {
            "Early (06:00-14:00)", "Late (14:00-22:00)", "Night (22:00-06:00)"};
    private static final int[] SHIFT_START_HOUR = {6, 14, 22};

    private record CharDef(String name, CharacteristicType type,
                           double nominal, double tolMinus, double tolPlus) {
        boolean unilateral() {
            return tolMinus == 0.0;
        }
    }

    private void seedMeasurementReports() {
        Long count = dataManager.loadValue(
                "select count(e) from MeasurementReport e", Long.class).one();
        if (count > 0) {
            return;
        }

        List<Spindle> spindles = dataManager.load(Spindle.class)
                .query("select e from Spindle e order by e.numberMark")
                .list().stream()
                .filter(s -> Boolean.TRUE.equals(s.getActive()))
                .toList();
        List<Employee> employees = dataManager.load(Employee.class)
                .query("select e from Employee e order by e.employeeId")
                .list().stream()
                .filter(e -> Boolean.TRUE.equals(e.getActive()))
                .toList();
        List<Employee> operators = employees.stream()
                .filter(e -> e.getType() == EmployeeType.OPERATOR).toList();
        List<Employee> inspectors = employees.stream()
                .filter(e -> e.getType() == EmployeeType.INSPECTOR).toList();
        if (spindles.isEmpty() || operators.isEmpty() || inspectors.isEmpty()) {
            log.warn("Skipping measurement seed data: no active spindles, operators or inspectors");
            return;
        }

        List<CharDef> defs = characteristicDefs();
        List<Integer> ootCandidates = new ArrayList<>();
        for (int c = 0; c < defs.size(); c++) {
            String name = defs.get(c).name();
            if (name.startsWith("CoolingHole_Dia") || name.startsWith("Aerofoil_ProfilePoint")) {
                ootCandidates.add(c);
            }
        }

        Random rnd = new Random(42);
        LocalDate firstDay = LocalDate.now().minusDays(SEED_DAYS);
        int spindleCount = spindles.size();
        int reworkReports = 0;

        publishProgress(SeedDataProgressEvent.Stage.REPORTS, 0, REPORT_COUNT, null);

        for (int i = 0; i < REPORT_COUNT; i++) {
            int spindleIdx = i % spindleCount;
            int shiftIdx = (i / spindleCount) % SHIFTS.length;
            int day = i * SEED_DAYS / REPORT_COUNT;
            Spindle spindle = spindles.get(spindleIdx);
            boolean threeSigma = "DMU-01".equals(spindle.getNumberMark());
            boolean deteriorating = "DMU-02".equals(spindle.getNumberMark());
            // 0..1 across this spindle's blades within the week — drives the DMU-02 wear trend
            int perSpindleTotal = (REPORT_COUNT - spindleIdx + spindleCount - 1) / spindleCount;
            double wear = perSpindleTotal > 1 ? (double) (i / spindleCount) / (perSpindleTotal - 1) : 1.0;

            LocalDateTime machiningStart = firstDay.plusDays(day)
                    .atTime(SHIFT_START_HOUR[shiftIdx], 0)
                    .plusMinutes(rnd.nextInt(30));
            LocalDateTime measuredAt = machiningStart
                    .plusHours(MACHINING_HOURS)
                    .plusMinutes(45 + rnd.nextInt(90));

            Employee operator = operators.get(
                    (spindleIdx * SHIFTS.length + shiftIdx) % operators.size());
            Employee inspector = inspectors.get(shiftIdx % inspectors.size());

            MeasurementReport report = dataManager.create(MeasurementReport.class);
            report.setPlanName("BLD-114_OP60_FINAL");
            report.setCalypsoVersion("7.6.10");
            report.setPartName("Gas Turbine Blade Stage 1 (420 mm)");
            report.setDrawingNo("DRG-88231-C");
            report.setPartId(String.format("BLD-114-%04d", 5001 + i));
            report.setBatch(String.format("B-23%02d", 40 + day));
            report.setWorksOrder(String.format("WO-56%03d", 100 + day));
            report.setOperation("OP-060 Final Milling");
            report.setMachineIdRaw(spindle.getNumberMark());
            report.setMachine(spindle);
            report.setMillOperatorRaw(rawName(operator));
            report.setMillOperator(operator);
            report.setMillShift(SHIFTS[shiftIdx]);
            report.setInspectorRaw(rawName(inspector));
            report.setInspector(inspector);
            report.setTraceabilityDiscrepancy(false);
            report.setCmmName("Zeiss PRISMO Navigator 9/15/7");
            report.setMeasurementDateTime(measuredAt);
            report.setTemperature(String.format(Locale.US, "%.1f C", 19.8 + rnd.nextDouble() * 0.5));
            report.setProbe("VAST XT gold, 3mm ruby");
            report.setSoakStart(measuredAt.minusHours(4).minusMinutes(rnd.nextInt(45)));
            report.setPartTempAtStart(String.format(Locale.US, "%.1f C", 19.9 + rnd.nextDouble() * 0.4));
            report.setAlignment("Datum A-B-C (3-2-1) blade root");
            report.setInputSource("DMIS program BLD114_OP60 rev 12");
            report.setSourceFileName(report.getPartId() + "_OP60.csv");
            report.setImportedAt(measuredAt.plusMinutes(30 + rnd.nextInt(90)));

            // the usual suspects: an out-of-tolerance cooling hole or profile point
            // on roughly every 8th blade (never on DMU-02, which must stay in tolerance)
            Set<Integer> forced = new HashSet<>();
            if (i % 8 == 3 && !deteriorating) {
                forced.add(ootCandidates.get(i % ootCandidates.size()));
                if (i % 16 == 11) {
                    forced.add(ootCandidates.get((i * 7) % ootCandidates.size()));
                }
            }

            SaveContext saveContext = new SaveContext();
            saveContext.saving(report);
            int outOfTolCount = 0;
            for (int c = 0; c < defs.size(); c++) {
                CharDef def = defs.get(c);
                double deviation = sampleDeviation(def, rnd, threeSigma, deteriorating, wear);
                if (forced.contains(c)) {
                    deviation = def.tolPlus() * (1.15 + (i % 4) * 0.12);
                }
                BigDecimal deviationScaled = scaled(deviation);
                boolean outOfTol = deviationScaled.doubleValue() > def.tolPlus()
                        || deviationScaled.doubleValue() < def.tolMinus();
                if (outOfTol) {
                    outOfTolCount++;
                }

                MeasurementCharacteristic row = dataManager.create(MeasurementCharacteristic.class);
                row.setReport(report);
                row.setSequence(c + 1);
                row.setName(def.name());
                row.setType(def.type());
                row.setTypeRaw(calypsoToken(def.type()));
                row.setNominal(scaled(def.nominal()));
                row.setActual(scaled(def.nominal() + deviation));
                row.setDeviation(deviationScaled);
                row.setTolMinus(scaled(def.tolMinus()));
                row.setTolPlus(scaled(def.tolPlus()));
                row.setOutOfTol(outOfTol);
                saveContext.saving(row);
            }

            report.setCharacteristicsTotal(defs.size());
            report.setCharacteristicsInTol(defs.size() - outOfTolCount);
            report.setCharacteristicsOutOfTol(outOfTolCount);
            report.setResult(outOfTolCount == 0 ? ReportResult.PASS : ReportResult.REWORK_CONCESSION);
            report.setDispositionRoute(outOfTolCount == 0 ? null : "Route to MRB for concession review");
            if (outOfTolCount > 0) {
                reworkReports++;
            }
            dataManager.save(saveContext);

            publishProgress(SeedDataProgressEvent.Stage.REPORTS, i + 1, REPORT_COUNT,
                    report.getPartId() + " on " + spindle.getNumberMark());
        }
        progress = new Progress(false, null, REPORT_COUNT, REPORT_COUNT, null);
        publishUiEvent(new SeedDataCompletedEvent(this, REPORT_COUNT));
        log.info("Seeded {} measurement reports ({} characteristics each, {} routed to concession review)",
                REPORT_COUNT, defs.size(), reworkReports);
    }

    /** Updates the progress snapshot and broadcasts a matching progress event. */
    private void publishProgress(SeedDataProgressEvent.Stage stage, int current, int total,
                                 @org.jspecify.annotations.Nullable String item) {
        progress = new Progress(true, stage, current, total, item);
        publishUiEvent(new SeedDataProgressEvent(this, stage, current, total, item));
    }

    /** Broadcasts a seeding event to all logged-in users; a UI problem must not fail seeding. */
    private void publishUiEvent(ApplicationEvent event) {
        try {
            uiEventPublisher.publishEventForUsers(event, null);
        } catch (RuntimeException e) {
            log.warn("Could not publish seeding UI event", e);
        }
    }

    /**
     * Deviation from nominal in mm (or degrees). Default machines run a 4-sigma
     * process (band/4), DMU-01 a 3-sigma one (band/3). DMU-02 uses a tighter
     * spread but its mean drifts towards the upper limit with tool wear, clamped
     * to 95% of the band so it deteriorates without going out of tolerance.
     * Unilateral (form/position) characteristics are centred around half the band.
     */
    private double sampleDeviation(CharDef def, Random rnd,
                                   boolean threeSigma, boolean deteriorating, double wear) {
        double band = def.tolPlus();
        double g = rnd.nextGaussian();
        if (deteriorating) {
            double deviation = def.unilateral()
                    ? (0.30 + wear * 0.45 + g * 0.06) * band
                    : (wear * 0.60 + g * 0.10) * band;
            double lower = def.unilateral() ? 0.02 * band : -0.95 * band;
            return Math.min(0.95 * band, Math.max(lower, deviation));
        }
        double k = threeSigma ? 3.0 : 4.0;
        return def.unilateral()
                ? Math.max(0.02 * band, (0.5 + g / (2 * k)) * band)
                : g * band / k;
    }

    /** The 90 characteristics of the blade measurement plan (mirrors the Calypso layout). */
    private static List<CharDef> characteristicDefs() {
        List<CharDef> defs = new ArrayList<>();
        // Root / dovetail block
        defs.add(new CharDef("Dovetail_FlankAngle_L", CharacteristicType.ANGLE, 65.0, -0.1, 0.1));
        defs.add(new CharDef("Dovetail_FlankAngle_R", CharacteristicType.ANGLE, 65.0, -0.1, 0.1));
        defs.add(new CharDef("Dovetail_Width", CharacteristicType.DISTANCE, 18.5, -0.02, 0.02));
        defs.add(new CharDef("Dovetail_Depth", CharacteristicType.DISTANCE, 12.0, -0.03, 0.03));
        defs.add(new CharDef("Root_Flatness", CharacteristicType.FLATNESS, 0.0, 0.0, 0.02));
        defs.add(new CharDef("Root_Perpendicularity", CharacteristicType.PERPENDICULARITY, 0.0, 0.0, 0.03));
        // Platform block
        defs.add(new CharDef("Platform_Parallelism", CharacteristicType.PARALLELISM, 0.0, 0.0, 0.03));
        defs.add(new CharDef("Platform_Symmetry", CharacteristicType.SYMMETRY, 0.0, 0.0, 0.04));
        defs.add(new CharDef("Platform_Height", CharacteristicType.DISTANCE, 42.0, -0.05, 0.05));
        defs.add(new CharDef("Platform_Width", CharacteristicType.DISTANCE, 55.0, -0.05, 0.05));
        // Edges and overall length (>= 400 mm blade)
        defs.add(new CharDef("LE_Radius", CharacteristicType.RADIUS, 1.25, -0.05, 0.05));
        defs.add(new CharDef("TE_Radius", CharacteristicType.RADIUS, 0.8, -0.05, 0.05));
        defs.add(new CharDef("Blade_TotalLength", CharacteristicType.DISTANCE, 420.0, -0.15, 0.15));
        // Aerofoil sections: chord, twist and wall thickness at 5 heights
        double[] chords = {92.0, 88.5, 85.0, 81.5, 78.0};
        double[] twists = {12.0, 18.5, 25.0, 31.5, 38.0};
        for (int s = 1; s <= 5; s++) {
            defs.add(new CharDef("Chord_Sec" + s, CharacteristicType.DISTANCE, chords[s - 1], -0.08, 0.08));
        }
        for (int s = 1; s <= 5; s++) {
            defs.add(new CharDef("Twist_Sec" + s, CharacteristicType.ANGLE, twists[s - 1], -0.15, 0.15));
        }
        for (int s = 1; s <= 5; s++) {
            defs.add(new CharDef("Wall_Thk_Sec" + s, CharacteristicType.DISTANCE, 2.8, -0.1, 0.1));
        }
        // Film cooling holes
        for (int h = 1; h <= 11; h++) {
            defs.add(new CharDef(String.format("CoolingHole_Dia_%02d", h),
                    CharacteristicType.DIAMETER, 3.2, -0.025, 0.025));
        }
        for (int h = 1; h <= 11; h++) {
            defs.add(new CharDef(String.format("CoolingHole_Pos_%02d", h),
                    CharacteristicType.POSITION, 0.0, 0.0, 0.05));
        }
        // Aerofoil surface profile
        for (int p = 1; p <= 40; p++) {
            defs.add(new CharDef(String.format("Aerofoil_ProfilePoint_P%02d", p),
                    CharacteristicType.PROFILE_POINT, 0.0, -0.05, 0.05));
        }
        return defs;
    }

    /** "James Barnes" -> "J.Barnes", the traceability format the Calypso files use. */
    private static String rawName(Employee employee) {
        return employee.getFirstName().charAt(0) + "." + employee.getLastName();
    }

    /** Calypso file token for a characteristic type, e.g. ANGLE -> "Angle". */
    private static String calypsoToken(CharacteristicType type) {
        String id = type.getId();
        return id.equals(id.toUpperCase(Locale.ROOT))
                ? id.charAt(0) + id.substring(1).toLowerCase(Locale.ROOT)
                : id;
    }

    private static BigDecimal scaled(double value) {
        return BigDecimal.valueOf(value).setScale(4, RoundingMode.HALF_UP);
    }
}
