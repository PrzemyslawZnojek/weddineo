package com.weddineo.api.controller;

import com.weddineo.api.dto.RegistrationDTO;
import com.weddineo.authentication.service.LogoutService;
import com.weddineo.authentication.service.RegistrationService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(value = "Authentication", tags = {
        "Authentication" }, description = "API to handle weddineo authentication and authorization")
@RestController
@RequestMapping("/auth")
public class AuthenticationController {
    private RegistrationService registrationService;
    private LogoutService logoutService;

    public AuthenticationController(RegistrationService registrationService, LogoutService logoutService) {
        this.registrationService = registrationService;
        this.logoutService = logoutService;
    }

    @ApiOperation(value = "Authentication", tags = "Version")
    @PostMapping(value = "/register")
    public RegistrationDTO createUser(@RequestBody RegistrationDTO registrationDTO) {
        registrationService.createUser(registrationDTO);
        return registrationDTO;
    }

    @ApiOperation(value = "Authentication", tags = "Version")
    @PostMapping(value = "/logout")
    public void logout() {
        logoutService.logout();
    }
}
