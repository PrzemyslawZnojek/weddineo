package com.weddineo.firebase.service;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.weddineo.firebase.exception.FirebaseRuntimeException;
import lombok.extern.log4j.Log4j2;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

@Component
@Slf4j
public class FirebaseAppInitializer {

    @Value("${firebase.private.key.path}")
    private String firebasePrivateKeyPath;

    @Value("${firebase.datebase.url}")
    private String firebaseDatabaseURL;

    @PostConstruct
    public void init(){
        log.info("Initializing firebase service...");
        try {
            FileInputStream serviceAccount =
                    new FileInputStream(firebasePrivateKeyPath);

            FirebaseOptions options = FirebaseOptions.builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                    .setDatabaseUrl(firebaseDatabaseURL)
                    .build();

            if (FirebaseApp.getApps().isEmpty()) {
                FirebaseApp.initializeApp(options);
            }
        } catch (FileNotFoundException e) {
            throw new FirebaseRuntimeException("Firebase credentials file not found");
        } catch (IOException e) {
            throw new FirebaseRuntimeException("Cannot read firebase credentials file");
        }
        log.info("Firebase service initialized successfully");
    }
}
