package com.weddineo.wedding.checklist.model.wedding;

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
@Table(name = "wedding")
public class Wedding {
    @Id
    @GeneratedValue
    @Column(name = "wedding_id")
    private Long id;

    @OneToMany(mappedBy = "wedding")
    private Set<WeddingOrganizer> weddingOrganizers;

    @OneToMany(mappedBy = "wedding")
    private Set<WeddingTask> tasks;
}
