package org.example.services.impl;


import org.example.models.Game;
import org.example.repositories.GameRepository;
import org.example.services.GameServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GameService implements GameServiceInterface {
    @Autowired
    private GameRepository gameRepository;

    @Override
    public List<Game> getGames() {
        return (List<Game>) gameRepository.findAll();
    }

    @Override
    public Optional<Game> getGame(long id) {
        return gameRepository.findById(id);
    }


    @Override
    public Game saveGame(Game game) {
        return gameRepository.save(game);
    }

    @Override
    public void deleteGame(long id) {
        gameRepository.deleteById(id);
    }
}
