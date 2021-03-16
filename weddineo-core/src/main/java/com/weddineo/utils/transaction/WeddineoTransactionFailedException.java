package com.weddineo.utils.transaction;

import lombok.Getter;

public class WeddineoTransactionFailedException extends Exception {

    @Getter
    private String operationId;

    public WeddineoTransactionFailedException(String operationId, String message, Throwable cause) {
        super(message, cause);
        this.operationId = operationId;
    }
}
