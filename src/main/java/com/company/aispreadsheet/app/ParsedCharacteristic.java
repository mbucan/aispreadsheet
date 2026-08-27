package com.company.aispreadsheet.app;

import com.company.aispreadsheet.entity.CharacteristicType;
import org.springframework.lang.Nullable;

import java.math.BigDecimal;

/**
 * One characteristic row of a Calypso table file. {@code type} is the mapped
 * enum (null for tokens the enum does not know); {@code typeRaw} is always the
 * verbatim file token.
 */
public record ParsedCharacteristic(
        int sequence,
        String name,
        @Nullable String typeRaw,
        @Nullable CharacteristicType type,
        @Nullable BigDecimal nominal,
        @Nullable BigDecimal actual,
        @Nullable BigDecimal deviation,
        @Nullable BigDecimal tolMinus,
        @Nullable BigDecimal tolPlus,
        boolean outOfTol) {
}
