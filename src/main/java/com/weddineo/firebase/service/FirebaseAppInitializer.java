package com.weddineo.firebase.service;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.weddineo.firebase.exception.WeddineoFirebaseRuntimeException;
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
            if (firebaseAppIsEmpty()) {
                initializeFirebaseApp();
            }
        } catch (FileNotFoundException e) {
            throw new WeddineoFirebaseRuntimeException("Firebase credentials file not found");
        } catch (IOException e) {
            throw new WeddineoFirebaseRuntimeException("Cannot read firebase credentials file");
        }
        log.info("Firebase service initialized successfully");
    }

    private boolean firebaseAppIsEmpty() {
        return FirebaseApp.getApps().isEmpty();
    }

    private void initializeFirebaseApp() throws IOException {
        FirebaseOptions options = createFirebaseOptions();
        FirebaseApp.initializeApp(options);
    }

    private FirebaseOptions createFirebaseOptions() throws IOException {
        FirebaseOptions options = FirebaseOptions.builder()
                .setCredentials(GoogleCredentials.fromStream(createFileInputStream()))
                .setDatabaseUrl(firebaseDatabaseURL)
                .build();
        return options;
    }

    private FileInputStream createFileInputStream() throws FileNotFoundException {
        FileInputStream serviceAccount =
                new FileInputStream(firebasePrivateKeyPath);
        return serviceAccount;
    }
}
