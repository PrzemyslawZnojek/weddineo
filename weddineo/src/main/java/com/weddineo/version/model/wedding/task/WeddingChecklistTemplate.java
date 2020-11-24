package com.worm.code.weddineo.model.wedding.task;

import com.worm.code.weddineo.model.user.WeddineoUser;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.Set;

@Data
@Builder
@AllArgsConstructor
public class WeddingChecklistTemplate {
    private Long id;
    private WeddineoUser creator;
    private String name;
    private Set<WeddingTaskTemplate> tasks;
}
