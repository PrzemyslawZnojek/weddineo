package com.weddineo.utils.transaction;

import lombok.Getter;

public class WeddineoRollbackFailedException extends Exception {
    @Getter
    private String operationId;


    public WeddineoRollbackFailedException(String operationId, String message, Throwable cause) {
        super(message, cause);
        this.operationId = operationId;
    }
}
