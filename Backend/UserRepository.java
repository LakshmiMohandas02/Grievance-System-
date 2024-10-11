package com.example.grievance_management.repository;

import com.example.grievance_management.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;




@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}


