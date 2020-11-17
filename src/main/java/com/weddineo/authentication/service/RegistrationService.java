package com.weddineo.authentication.service;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import com.google.firebase.auth.UserRecord.CreateRequest;
import com.weddineo.authentication.exception.RegistrationRuntimeException;
import com.weddineo.authentication.model.RegistrationInfo;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {

    public UserRecord createUser(RegistrationInfo registrationInfo){
        CreateRequest request = new CreateRequest()
                .setEmail(registrationInfo.getEmail())
                .setDisplayName(registrationInfo.getUsername())
                .setPassword(registrationInfo.getPassword());

        UserRecord userRecord;
        try {
            userRecord = FirebaseAuth.getInstance().createUser(request);
        } catch (FirebaseAuthException e){
            throw new RegistrationRuntimeException(e.getAuthErrorCode().name(), e);
        }

        return userRecord;
    }
}
