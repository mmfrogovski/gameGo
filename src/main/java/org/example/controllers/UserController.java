package org.example.controllers;


import org.example.models.User;
import org.example.services.UserServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users/")
public class UserController {

    private UserServiceInterface userServiceInterface;

    @Autowired
    public UserController(UserServiceInterface userServiceInterface) {
        this.userServiceInterface = userServiceInterface;
    }

    @GetMapping("")
    public List<User> getUsers() {
        return (List<User>) userServiceInterface.getUsers();
    }

    @PostMapping("")
    public void saveUser(@RequestBody User user){
        userServiceInterface.saveUser(user);
    }
}
