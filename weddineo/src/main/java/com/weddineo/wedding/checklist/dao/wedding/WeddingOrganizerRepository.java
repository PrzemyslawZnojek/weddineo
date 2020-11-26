package com.weddineo.wedding.checklist.dao.wedding;

import com.weddineo.wedding.checklist.model.wedding.WeddingOrganizer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WeddingOrganizerRepository
        extends JpaRepository<WeddingOrganizer, Long> {
}
