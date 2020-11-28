package com.weddineo.api.controller;

import com.weddineo.WeddineoProperties;
import com.weddineo.api.dto.ApplicationVersionDTO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Api(value = "Version",
        tags = { "Version" },
        description = "API to access build version and repository revision, can be used as healthcheck" )
@RestController
@RequestMapping("/ver")
public class VersionController {

    @Value("${git.commit.id}")
    private String commitID;

    private WeddineoProperties weddineoProperties;

    public VersionController(WeddineoProperties weddineoProperties) {
        this.weddineoProperties = weddineoProperties;
    }

    @ApiOperation(
            value = "Get current version and git revision",
            tags = "Version"
    )
    @GetMapping
    public ApplicationVersionDTO getVersion() {
        return ApplicationVersionDTO.builder()
                .version(weddineoProperties.getBuildVersion())
                .revision(commitID)
                .build();
    }
}
