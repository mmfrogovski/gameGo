package org.example.controllers;


import org.example.models.Game;
import org.example.services.GameServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/games")
public class GameController {
    private GameServiceInterface gameService;

    @Autowired
    GameController(GameServiceInterface gameService) {
        this.gameService = gameService;
    }

    @GetMapping("")
    public List<Game> getGames() {
        return (List<Game>) gameService.getGames();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Game> getGame(@PathVariable(name = "id") long id){
        Optional<Game> game = gameService.getGame(id);
        return game.isPresent() ? ResponseEntity.ok(game.get()) : ResponseEntity.notFound().build();
    }

    @PostMapping("")
    public Game saveGame(@RequestBody Game game) {
        return gameService.saveGame(game);
    }


}
