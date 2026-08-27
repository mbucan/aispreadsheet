package com.company.aispreadsheet.entity;

import io.jmix.core.metamodel.datatype.EnumClass;
import org.springframework.lang.Nullable;

public enum CharacteristicType implements EnumClass<String> {

    FLATNESS("FLATNESS"),
    ANGLE("ANGLE"),
    DISTANCE("DISTANCE"),
    RADIUS("RADIUS"),
    DIAMETER("DIAMETER"),
    PROFILE_POINT("ProfilePoint"),
    LINE_PROFILE("LineProfile"),
    POSITION("POSITION"),
    SYMMETRY("SYMMETRY"),
    PARALLELISM("PARALLELISM"),
    PERPENDICULARITY("PERPENDICULARITY");

    private final String id;

    CharacteristicType(String id) {
        this.id = id;
    }

    @Override
    public String getId() {
        return id;
    }

    @Nullable
    public static CharacteristicType fromId(String id) {
        for (CharacteristicType value : CharacteristicType.values()) {
            if (value.getId().equals(id)) {
                return value;
            }
        }
        return null;
    }

    /**
     * Maps a raw Calypso file token (e.g. "ProfilePoint", "Flatness", "LINE_PROFILE")
     * to the enum, case-insensitively. Unknown tokens return null — the import stores
     * the raw token separately and must not fail on types this enum does not know.
     */
    @Nullable
    public static CharacteristicType fromCalypso(@Nullable String raw) {
        if (raw == null || raw.isBlank()) {
            return null;
        }
        String token = raw.trim();
        for (CharacteristicType value : CharacteristicType.values()) {
            if (value.getId().equalsIgnoreCase(token) || value.name().equalsIgnoreCase(token)) {
                return value;
            }
        }
        return null;
    }
}
