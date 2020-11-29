package com.weddineo.authentication.service;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import com.google.firebase.auth.UserRecord.CreateRequest;
import com.weddineo.authentication.exception.WeddineoRegistrationRuntimeException;
import com.weddineo.api.dto.RegistrationDTO;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {

    public UserRecord createUser(RegistrationDTO registrationDTO){
        CreateRequest request = new CreateRequest()
                .setEmail(registrationDTO.getEmail())
                .setDisplayName(registrationDTO.getUsername())
                .setPassword(registrationDTO.getPassword());

        UserRecord userRecord;
        try {
            userRecord = FirebaseAuth.getInstance().createUser(request);
        } catch (FirebaseAuthException e){
            throw new WeddineoRegistrationRuntimeException(e.getAuthErrorCode().name(), e);
        }

        return userRecord;
    }
}
