package com.worm.code.weddineo.model.user;

import com.worm.code.weddineo.model.wedding.WeddingOrganizer;
import com.worm.code.weddineo.model.wedding.task.WeddingTask;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.Set;

@Data
@Builder
@AllArgsConstructor
public class WeddineoUser {
    private Long id;

    /* Type depends on chosen provider - for Firebase it is String, while changing provider
    * probably it wil be necessary to change id type */
    private String jwsProviderID;
    private Set<WeddingOrganizer> weddingOrganizer;
    private Set<WeddingTask> tasks;
}
