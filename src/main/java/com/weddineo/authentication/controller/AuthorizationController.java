package com.weddineo.authentication.controller;

import com.weddineo.authentication.dto.RegistrationDTO;
import com.weddineo.authentication.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthorizationController {

    RegistrationService registrationService;

    @Autowired
    public AuthorizationController(RegistrationService registrationService) {
        this.registrationService = registrationService;
    }

    @PostMapping(value = "/register")
    public RegistrationDTO createUser(@RequestBody RegistrationDTO registrationDTO){
        registrationService.createUser(registrationDTO);
        return registrationDTO;
    }
}
