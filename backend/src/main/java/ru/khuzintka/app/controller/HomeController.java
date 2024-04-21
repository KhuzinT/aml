package ru.khuzintka.app.controller;

import org.springframework.web.bind.annotation.*;
import ru.khuzintka.app.model.Movie;
import ru.khuzintka.app.service.MovieService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/home")
public class HomeController {
    private final MovieService movieService;

    public HomeController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping
    public List<Movie> getAllMovies() {
        return movieService.getAllMovies();
    }

    @PutMapping("/{id}")
    public void changeFavoriteMovie(@PathVariable(name = "id") Long id) {
        movieService.changeFavoriteMovie(id);
    }
}
