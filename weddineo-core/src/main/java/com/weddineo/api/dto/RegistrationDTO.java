package com.weddineo.api.dto;

import io.swagger.annotations.ApiModel;
import lombok.Data;

@ApiModel(value = "RegistarationData")
@Data
public class RegistrationDTO {
    private String username;
    private String password;
    private String email;
}
