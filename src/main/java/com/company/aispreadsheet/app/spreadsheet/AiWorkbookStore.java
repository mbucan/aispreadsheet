package com.company.aispreadsheet.app.spreadsheet;

import io.jmix.core.FileRef;
import io.jmix.core.FileStorageLocator;
import org.jspecify.annotations.Nullable;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.io.ByteArrayInputStream;
import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Holds the "current workbook" per user. The canonical state is the immutable xlsx byte array
 * (never a live POI workbook - POI is not thread-safe), so the AI tool thread, the UI thread
 * and the downloader can share it freely. Each save is also persisted to the default
 * {@code FileStorage} for durability and audit; the in-memory bytes remain the source of truth
 * for the UI. After an application restart the map is empty and the tools guide the model to
 * create a new workbook first.
 */
@Component
public class AiWorkbookStore {

    private static final Logger log = LoggerFactory.getLogger(AiWorkbookStore.class);

    public record WorkbookState(String fileName, byte[] bytes, @Nullable FileRef fileRef,
                                Instant updatedAt, List<CellIssue> lastIssues) {
    }

    private final FileStorageLocator fileStorageLocator;

    private final Map<String, WorkbookState> stateByUser = new ConcurrentHashMap<>();

    public AiWorkbookStore(FileStorageLocator fileStorageLocator) {
        this.fileStorageLocator = fileStorageLocator;
    }

    @Nullable
    public WorkbookState get(String username) {
        return stateByUser.get(username);
    }

    /**
     * Stores the workbook for the user, persisting a copy to the default file storage.
     * Mutation goes through {@code compute} so concurrent tool calls of one user serialize.
     */
    public WorkbookState put(String username, String fileName, byte[] bytes, List<CellIssue> issues) {
        return stateByUser.compute(username, (user, previous) -> {
            FileRef fileRef = null;
            try {
                fileRef = fileStorageLocator.getDefault()
                        .saveStream(fileName, new ByteArrayInputStream(bytes));
            } catch (RuntimeException e) {
                // Storage problems must not fail the tool call - the in-memory copy still works.
                log.warn("Could not persist AI workbook '{}' to file storage", fileName, e);
            }
            return new WorkbookState(fileName, bytes, fileRef, Instant.now(), List.copyOf(issues));
        });
    }

    public void clear(String username) {
        stateByUser.remove(username);
    }
}
