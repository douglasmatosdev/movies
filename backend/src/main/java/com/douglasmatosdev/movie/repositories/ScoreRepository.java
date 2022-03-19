package com.douglasmatosdev.movie.repositories;

import com.douglasmatosdev.movie.entities.Score;
import com.douglasmatosdev.movie.entities.ScorePrimaryKey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, ScorePrimaryKey> {

}
