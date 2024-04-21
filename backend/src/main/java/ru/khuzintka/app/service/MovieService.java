package ru.khuzintka.app.service;

import org.springframework.stereotype.Service;
import ru.khuzintka.app.exception.MovieNotFoundException;
import ru.khuzintka.app.model.Movie;
import ru.khuzintka.app.repository.MovieRepository;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class MovieService {
    private final MovieRepository movieRepository;

    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public Movie getMovieById(Long id) {
        return movieRepository.findById(id).orElseThrow(
                () -> new MovieNotFoundException(String.format("Movie with id №%d not found", id))
        );
    }

    public List<Movie> getAllMovies() {
        return StreamSupport.stream(movieRepository.findAll().spliterator(), false).collect(Collectors.toList());
    }

    public List<Movie> getFavoriteMovies() {
        return getAllMovies().stream().filter(Movie::getIsFavorite).collect(Collectors.toList());
    }

    public void addMovie(Movie movie) {
        movieRepository.save(movie);
    }

    public void editMovie(Movie movie) {
        if (!movieRepository.existsById(movie.getId())) {
            throw new MovieNotFoundException(String.format("Movie with id №%d not found", movie.getId()));
        }
        movieRepository.save(movie);
    }

    public void changeFavoriteMovie(Long id) {
        if (!movieRepository.existsById(id)) {
            throw new MovieNotFoundException(String.format("Movie with id №%d not found", id));
        }
        Movie movie = movieRepository.findById(id).get();
        movie.setIsFavorite(!movie.getIsFavorite());
        movieRepository.save(movie);
    }

    public void removeFavoriteMovie(Long id) {
        if (!movieRepository.existsById(id)) {
            throw new MovieNotFoundException(String.format("Movie with id №%d not found", id));
        }
        Movie movie = movieRepository.findById(id).get();
        movie.setIsFavorite(false);
        movieRepository.save(movie);
    }
}
