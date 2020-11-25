package com.weddineo.wedding.checklist.model.wedding;

import com.weddineo.wedding.checklist.model.user.WeddineoUser;
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
@Table(name = "wedding_organizer")
public class WeddingOrganizer {
    @Id
    @GeneratedValue
    @Column(name = "wedding_organizer_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private WeddineoUser user;

    @ManyToOne
    @JoinColumn(name = "wedding_id")
    private Wedding wedding;

    @Enumerated(EnumType.STRING)
    private WeddingRole role;
}
