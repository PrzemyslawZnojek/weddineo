package com.weddineo.wedding.checklist.model.wedding.task;

import com.weddineo.wedding.checklist.model.user.WeddineoUser;
import com.weddineo.wedding.checklist.model.wedding.Wedding;
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
@Table(name = "wedding_task")
public class WeddingTask {
    @Id
    @GeneratedValue
    @Column(name = "task_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private WeddineoUser executor;

    @ManyToOne
    @JoinColumn(name = "wedding_id")
    private Wedding wedding;

    @Enumerated(EnumType.STRING)
    private WeddingTaskStatus status;

    private String name;
    private String description;
}
