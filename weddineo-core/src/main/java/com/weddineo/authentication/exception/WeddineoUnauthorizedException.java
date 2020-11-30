package com.weddineo.authentication.exception;

public class WeddineoUnauthorizedException extends RuntimeException {

    /**
     *
     */
    private static final long serialVersionUID = -1573120569172434064L;

    public WeddineoUnauthorizedException(String message) {
        super(message);
    }

    public WeddineoUnauthorizedException(String message, Throwable cause) {
        super(message, cause);
    }
}
