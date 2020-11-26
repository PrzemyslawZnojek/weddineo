package com.weddineo.wedding.checklist.dao.wedding.task;

import com.weddineo.wedding.checklist.model.wedding.task.WeddingTaskTemplate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WeddingTaskTemplateRepository
        extends JpaRepository<WeddingTaskTemplate, Long> {
}
