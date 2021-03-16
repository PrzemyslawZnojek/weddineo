package com.weddineo.utils.transaction;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.function.Supplier;

@Getter
@AllArgsConstructor
public class WeddineoAtomicOperation {
    private final String id;
    private final Callback operation;
    private final Callback rollback;
}
