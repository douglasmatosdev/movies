package com.douglasmatosdev.movie.repositories;

import com.douglasmatosdev.movie.entities.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
