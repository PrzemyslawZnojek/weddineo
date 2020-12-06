package com.weddineo.exception.handler;

import com.weddineo.exception.dto.WeddineoApiErrorDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<WeddineoApiErrorDTO> illegalArgument(IllegalArgumentException ex, WebRequest request){
        WeddineoApiErrorDTO weddineoApiErrorDTO = new WeddineoApiErrorDTO(HttpStatus.BAD_REQUEST, "Illegal argument", ex, request);
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(weddineoApiErrorDTO);
    }

}
