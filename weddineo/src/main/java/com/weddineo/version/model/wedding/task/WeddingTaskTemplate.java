package com.worm.code.weddineo.model.wedding.task;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.Set;

@Data
@Builder
@AllArgsConstructor
public class WeddingTaskTemplate {
    private Long id;
    private Set<WeddingTaskTemplate> blockedBy;
    private Set<WeddingTaskTemplate> blocks;
    private String name;
    private String description;
    private WeddingChecklistTemplate checklist;
}
