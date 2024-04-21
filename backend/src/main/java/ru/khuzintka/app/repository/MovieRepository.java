package ru.khuzintka.app.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.khuzintka.app.model.Movie;

@Repository
public interface MovieRepository extends CrudRepository<Movie, Long> {
}
