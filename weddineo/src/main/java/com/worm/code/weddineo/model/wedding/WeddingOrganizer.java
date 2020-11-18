package com.worm.code.weddineo.model.wedding;

import com.worm.code.weddineo.model.user.WeddineoUser;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class WeddingOrganizer {
    private Long id;
    private WeddineoUser user;
    private Wedding wedding;
    private WeddingRole role;
}
