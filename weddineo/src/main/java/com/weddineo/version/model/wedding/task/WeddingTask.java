package com.worm.code.weddineo.model.wedding.task;

import com.worm.code.weddineo.model.user.WeddineoUser;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.Set;

@Data
@Builder
@AllArgsConstructor
public class WeddingTask {
    private Long id;
    private Set<WeddineoUser> executors;
    private WeddingTaskStatus status;
    private String name;
    private String description;
}
