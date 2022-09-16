package com.example.server.controllers;

import java.util.List;

import com.example.server.entities.Filiere;
import com.example.server.services.Filiere_Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("filiere")
public class Filiere_controller {
	@Autowired
	Filiere_Service filiere_service;
	
	@GetMapping()
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Filiere> getAllFiliere(){
		return filiere_service.getall();
	}
	
	@GetMapping("/{id_Filiere}")
	public Filiere getAllFiliereByID(@PathVariable Long id_Filiere){
		Filiere filiere = filiere_service.getById(id_Filiere);
		return filiere;
	} 
	
	@PostMapping()
	public Filiere PostFilier(@RequestBody Filiere filiere) {
		Filiere filiere1 = filiere_service.save(filiere);
		return filiere1;
	}
	
	
	@DeleteMapping("/{id_Filiere}")
	public void DeleteFiliereById(@PathVariable Long id_Filiere) {
		filiere_service.delete(id_Filiere);
	}
	
	
	
}
