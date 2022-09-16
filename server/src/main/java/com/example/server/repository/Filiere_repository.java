package com.example.server.repository;

import com.example.server.entities.Filiere;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface Filiere_repository extends JpaRepository<Filiere, Long> {

}
