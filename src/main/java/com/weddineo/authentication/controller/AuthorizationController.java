package com.weddineo.authentication.controller;

import com.weddineo.authentication.model.RegistrationInfo;
import com.weddineo.authentication.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthorizationController {

    @Autowired
    RegistrationService registrationService;

    @PostMapping(value = "/register")
    public RegistrationInfo createUser(@RequestBody RegistrationInfo registrationInfo){
        registrationService.createUser(registrationInfo);
        return registrationInfo;
    }
}
