package ru.khuzintka.app.controller;

import org.springframework.web.bind.annotation.*;
import ru.khuzintka.app.model.Movie;
import ru.khuzintka.app.service.MovieService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/favorite")
public class FavoriteController {
    private final MovieService movieService;

    public FavoriteController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping
    public List<Movie> getFavoriteMovies() {
        return movieService.getFavoriteMovies();
    }

    @PutMapping("/{id}")
    public void removeFavoriteMovie(@PathVariable(name = "id") Long id) {
        movieService.removeFavoriteMovie(id);
    }
}
