package com.weddineo.wedding.checklist.model.wedding.task;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "task_template")
public class WeddingTaskTemplate {
    @Id
    @GeneratedValue
    @Column(name = "task_template_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "checklist_template_id")
    private WeddingChecklistTemplate checklistTemplate;

    private String name;
    private String description;
}
