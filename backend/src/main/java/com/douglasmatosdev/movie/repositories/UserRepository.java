package com.douglasmatosdev.movie.repositories;

import com.douglasmatosdev.movie.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);
}
