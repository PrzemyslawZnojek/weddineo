package com.weddineo.exception.handler.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
@AllArgsConstructor
public class WeddineoApiErrorDTO {
    private String message;
    private String code;
}
