package org.example.services;

import org.example.models.Game;

import java.util.List;
import java.util.Optional;

public interface GameServiceInterface {
    List<Game> getGames();

    Optional<Game> getGame(long id);

    Game saveGame(Game game);

    void deleteGame(long id);

}
