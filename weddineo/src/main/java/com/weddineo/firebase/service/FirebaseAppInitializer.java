package com.weddineo.firebase.service;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.weddineo.firebase.FirebaseProperties;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.IOException;

@Component
@Slf4j
public class FirebaseAppInitializer {

    private final FirebaseProperties firebaseProperties;

    @Value("classpath:firebase/weddineo-an-firebase-adminsdk.json")
    private Resource firebasePrivateKey;

    public FirebaseAppInitializer(FirebaseProperties firebaseProperties) {
        this.firebaseProperties = firebaseProperties;
    }

    @PostConstruct
    public void init() {
//        log.info("Initializing firebase service...");
//        try {
//            if (firebaseAppIsEmpty()) {
//                initializeFirebaseApp();
//            }
//        } catch (FileNotFoundException e) {
//            throw new WeddineoFirebaseRuntimeException("Firebase credentials file not found");
//        } catch (IOException e) {
//            throw new WeddineoFirebaseRuntimeException("Cannot read firebase credentials file");
//        }
//        log.info("Firebase service initialized successfully");
    }

    private boolean firebaseAppIsEmpty() {
        return FirebaseApp.getApps().isEmpty();
    }

    private void initializeFirebaseApp() throws IOException {
        FirebaseOptions options = createFirebaseOptions();
        FirebaseApp.initializeApp(options);
    }

    private FirebaseOptions createFirebaseOptions() throws IOException {
        return FirebaseOptions.builder()
                .setCredentials(getGoogleCredentials())
                .setDatabaseUrl(firebaseProperties.getDatabaseUrl())
                .build();
    }

    private GoogleCredentials getGoogleCredentials() throws IOException {
        return GoogleCredentials.fromStream(firebasePrivateKey.getInputStream());
    }
}
