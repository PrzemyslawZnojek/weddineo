package com.worm.code.weddineo.model.wedding;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.Set;

@Data
@Builder
@AllArgsConstructor
public class Wedding {
    private Long id;
    private Set<WeddingOrganizer> weddingOrganizers;
}
