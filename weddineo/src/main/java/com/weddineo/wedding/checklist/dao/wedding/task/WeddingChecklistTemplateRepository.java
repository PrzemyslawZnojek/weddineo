package com.weddineo.wedding.checklist.dao.wedding.task;

import com.weddineo.wedding.checklist.model.wedding.task.WeddingChecklistTemplate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WeddingChecklistTemplateRepository
        extends JpaRepository<WeddingChecklistTemplate, Long> {
}
