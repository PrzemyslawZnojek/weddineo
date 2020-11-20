package com.weddineo.version.model;


import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ApplicationVersion {
    public String version;
    public String revision;
}
