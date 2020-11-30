package com.weddineo.firebase.exception;

public class WeddineoFirebaseRuntimeException extends RuntimeException {
    public WeddineoFirebaseRuntimeException(String message) {
        super(message);
    }
    public WeddineoFirebaseRuntimeException(String message, Exception ex) {
        super(message, ex);
    }
}
