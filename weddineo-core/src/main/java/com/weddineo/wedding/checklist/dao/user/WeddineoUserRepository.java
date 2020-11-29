package com.weddineo.wedding.checklist.dao.user;

import com.weddineo.wedding.checklist.model.user.WeddineoUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WeddineoUserRepository
        extends JpaRepository<WeddineoUser, Long> {
}
