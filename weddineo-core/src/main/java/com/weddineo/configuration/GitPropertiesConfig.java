package com.weddineo.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.core.io.ClassPathResource;

@Configuration
public class GitPropertiesConfig {
    @Bean
    public static PropertySourcesPlaceholderConfigurer placeholderConfigurer() {
        PropertySourcesPlaceholderConfigurer propertyConfig
                = new PropertySourcesPlaceholderConfigurer();
        propertyConfig.setLocation(new ClassPathResource("git.properties"));
        propertyConfig.setIgnoreResourceNotFound(true);
        propertyConfig.setIgnoreUnresolvablePlaceholders(true);
        return propertyConfig;
    }
}
