package com.weddineo.authentication.service;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class LogoutService {

    public void logout(){
        SecurityContextHolder.clearContext();
    }
    
}
