package com.weddineo.wedding.checklist.model.user;

import com.weddineo.wedding.checklist.model.wedding.WeddingOrganizer;
import com.weddineo.wedding.checklist.model.wedding.task.WeddingChecklistTemplate;
import com.weddineo.wedding.checklist.model.wedding.task.WeddingTask;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class WeddineoUser {
    @Id
    @GeneratedValue
    @Column(name = "user_id")
    private Long id;

    /* Type depends on chosen provider - for Firebase it is String, while changing provider
     * probably it wil be necessary to change id type */

    @OneToMany(mappedBy = "user")
    private Set<WeddingOrganizer> weddingOrganizer;

    @OneToMany(mappedBy = "creator")
    private Set<WeddingChecklistTemplate> checklistTemplatesCreated;

    @OneToMany(mappedBy = "executor")
    private Set<WeddingTask> tasks;

    @Column(name = "jws_provided_id", nullable = false, unique = true, updatable = false)
    private String jwsProviderID;
}
