package com.weddineo.authentication.model;

import lombok.Data;

@Data
public class RegistrationInfo {
    private String username;
    private String password;
    private String email;
}
