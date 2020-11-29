package com.weddineo.wedding.checklist.model.wedding.task;

import com.weddineo.wedding.checklist.model.user.WeddineoUser;
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
@Table(name = "checklist_template")
public class WeddingChecklistTemplate {
    @Id
    @GeneratedValue
    @Column(name = "checklist_template_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private WeddineoUser creator;

    @OneToMany(mappedBy = "checklistTemplate")
    private Set<WeddingTaskTemplate> tasks;

    private String name;
}
