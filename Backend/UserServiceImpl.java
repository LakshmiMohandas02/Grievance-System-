package com.example.grievance_management.Service.impl;



import com.example.grievance_management.entity.User;
import com.example.grievance_management.repository.UserRepository;
import com.example.grievance_management.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
    // New method to get user by username
    @Override
    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);  // Use the UserRepository method
    }
}