package com.douglasmatosdev.movie.entities;


import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tb_score")
public class Score {

    @EmbeddedId
    private ScorePrimaryKey id = new ScorePrimaryKey(); // Chave primária composta

    private Double value;

    public Score() {

    }

    public void setMovie(Movie movie) {
        id.setMovie(movie);
    }

    public void setUser(User user) {
        id.setUser(user);
    }

    public ScorePrimaryKey getId() {
        return id;
    }

    public void setId(ScorePrimaryKey id) {
        this.id = id;
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }
}
