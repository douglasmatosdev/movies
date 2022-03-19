package com.douglasmatosdev.movie.controllers;

import com.douglasmatosdev.movie.dto.MovieDTO;
import com.douglasmatosdev.movie.dto.ScoreDTO;
import com.douglasmatosdev.movie.services.MovieService;
import com.douglasmatosdev.movie.services.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {

    @Autowired
    private ScoreService service;

    @PutMapping(value = "/{id}")
    public MovieDTO saveScore(@RequestBody ScoreDTO dto) {
        MovieDTO movieDTO = service.saveScore(dto);
        return movieDTO;
    }
}

