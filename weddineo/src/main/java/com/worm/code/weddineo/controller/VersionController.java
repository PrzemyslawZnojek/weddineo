package com.worm.code.weddineo.controller;

import com.worm.code.weddineo.model.ApplicationVersion;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Log
@RestController
@RequestMapping("/ver")
public class VersionController {
    @Value("${weddineo.build.version}")
    private String buildVersion;

    @GetMapping
    public ApplicationVersion getVersion() {
        return ApplicationVersion.builder()
                .version(buildVersion)
                .revision("Not implemented")
                .build();
    }
}
