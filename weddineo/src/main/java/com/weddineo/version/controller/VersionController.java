package com.weddineo.version.controller;

import com.weddineo.version.model.ApplicationVersion;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
