package com.example.server.services;

import java.util.List;

import com.example.server.entities.Filiere;
import com.example.server.repository.Filiere_repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class Filiere_Service implements Services_Dao<Filiere> {
		@Autowired
		Filiere_repository filiere_repository;
		
	@Override  
	public List<Filiere> getall() {
		return filiere_repository.findAll(); 
	}

	@Override 
	public Filiere getById(Long id_Filiere) {
		return filiere_repository.findById(id_Filiere)
		.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Resource Not found"));

	}

	@Override 
	public Filiere save(Filiere filiere) {
		return filiere_repository.save(filiere);
	}

	@Override 
	public void update(Long id, Filiere filiere) {
		Filiere filiere1 = filiere_repository.findById(id).get();
		System.out.println(filiere.toString());
		filiere1.setId_Filiere(filiere.getId_Filiere());
		filiere1.setFiliere(filiere.getFiliere());
		filiere1.setNiveau(filiere.getNiveau()); 
		filiere_repository.save(filiere1);
	}
 
	@Override
	public void delete(Long id_Filiere) {
		filiere_repository.deleteById(id_Filiere); 
	}

}
