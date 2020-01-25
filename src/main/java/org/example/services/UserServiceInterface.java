package org.example.services;


import org.example.models.User;

import java.util.List;
import java.util.Optional;

public interface UserServiceInterface {
    List<User> getUsers();

    Optional<User> getUserById(long userId);

    void saveUser(User user);

    void deleteUserById(long userId);
}
