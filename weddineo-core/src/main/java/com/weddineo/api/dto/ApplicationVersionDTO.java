package com.weddineo.api.dto;


import io.swagger.annotations.ApiModel;
import lombok.Builder;
import lombok.Data;

@ApiModel(value = "ApplicationVersion")
@Data
@Builder
public class ApplicationVersionDTO {
    public String version;
    public String revision;
}
