package com.weddineo;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Getter
@Setter
@Component
@ConfigurationProperties(prefix = "weddineo")
public class WeddineoProperties {
    private String buildVersion;
    private List<String> publicUrls;
}
