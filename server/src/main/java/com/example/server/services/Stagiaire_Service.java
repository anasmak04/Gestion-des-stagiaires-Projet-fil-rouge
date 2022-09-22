package com.example.server.services;

import java.util.List;

import com.example.server.entities.Stagiaire;
import com.example.server.repository.Stagiaire_repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class Stagiaire_Service implements Services_Dao<Stagiaire> {
		@Autowired
		Stagiaire_repository stagiaire_Repository;
	@Override
	public List<Stagiaire> getall() {
		return stagiaire_Repository.findAll();
//		class Data {
//			
//		
//		}
//		return stagiaire_Repository.count();

		
	}

	@Override
	public Stagiaire getById(Long id) {
		return stagiaire_Repository.findById(id)
		.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Resource Not found"));

	}
 
	@Override
	public Stagiaire save(Stagiaire stagiaire) {
		return stagiaire_Repository.save(stagiaire);
	}

	@Override
	public void update(Long id, Stagiaire stagiaire) {
		Stagiaire stagiaire1 = stagiaire_Repository.findById(id).get();
		stagiaire1.setId(stagiaire.getId());
		stagiaire1.setNom(stagiaire.getNom());
		stagiaire1.setPrenom(stagiaire.getPrenom());
		stagiaire1.setFiliere(stagiaire.getFiliere());
		stagiaire_Repository.save(stagiaire1);
		
	}

	@Override
	public void delete(Long id) {
		stagiaire_Repository.deleteById(id);
	}

}
