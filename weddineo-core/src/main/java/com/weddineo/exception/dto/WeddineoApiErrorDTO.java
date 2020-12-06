package com.weddineo.exception.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import org.springframework.http.HttpStatus;
import org.springframework.web.context.request.ServletWebRequest;
import org.springframework.web.context.request.WebRequest;

import java.time.LocalDateTime;

@Data
public class WeddineoApiErrorDTO {
    private final HttpStatus status;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
    private final LocalDateTime timestamp = LocalDateTime.now();
    private final String path;
    private final String message;
    private final String debugMessage;

    public WeddineoApiErrorDTO(HttpStatus status, Throwable exception, WebRequest request) {
        this.status = status;
        this.message = "Unexpected error";
        this.debugMessage = exception.getLocalizedMessage();
        this.path = ((ServletWebRequest)request).getRequest().getRequestURI();
    }

    public WeddineoApiErrorDTO(HttpStatus status, String message, Throwable exception, WebRequest request) {
        this.status = status;
        this.message = message;
        this.debugMessage = exception.getLocalizedMessage();
        this.path = ((ServletWebRequest)request).getRequest().getRequestURI();
    }


}
