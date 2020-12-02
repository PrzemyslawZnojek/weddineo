package com.weddineo.firebase.service;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.weddineo.firebase.FirebaseProperties;
import com.weddineo.firebase.exception.WeddineoFirebaseRuntimeException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

@Component
@Slf4j
public class FirebaseAppInitializer {

    private final FirebaseProperties firebaseProperties;

    public FirebaseAppInitializer(FirebaseProperties firebaseProperties) {
        this.firebaseProperties = firebaseProperties;
    }

    @PostConstruct
    public void init() {
        log.info("Initializing firebase service...");
        if (firebaseAppIsEmpty()) {
            initializeFirebaseApp();
        }
        log.info("Firebase service initialized successfully");
    }

    private boolean firebaseAppIsEmpty() {
        return FirebaseApp.getApps().isEmpty();
    }

    private void initializeFirebaseApp() {
        FirebaseOptions options = createFirebaseOptions();
        FirebaseApp.initializeApp(options);
    }

    private FirebaseOptions createFirebaseOptions() {
        return FirebaseOptions.builder()
                .setCredentials(getGoogleCredentials())
                .setDatabaseUrl(firebaseProperties.getDatabaseUrl())
                .build();
    }

    private GoogleCredentials getGoogleCredentials() {
        log.info("Loading credentials from file: {}", firebaseProperties.getCredentialsPath());
        try {
            InputStream credentialsInputStream = new FileInputStream(firebaseProperties.getCredentialsPath());
            return GoogleCredentials.fromStream(credentialsInputStream);
        } catch (FileNotFoundException e) {
            throw new WeddineoFirebaseRuntimeException(
                    String.format("Firebase credentials file not found: %s", firebaseProperties.getCredentialsPath()));
        } catch (IOException e) {
            throw new WeddineoFirebaseRuntimeException("Cannot read firebase credentials file", e);
        }
    }
}
