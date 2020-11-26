package com.weddineo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties
public class WeddineoApplication {

	public static void main(String[] args) {
		SpringApplication.run(WeddineoApplication.class, args);
	}

}
