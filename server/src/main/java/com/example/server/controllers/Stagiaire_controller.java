package com.example.server.controllers;

import java.util.List;

import com.example.server.entities.Stagiaire;
import com.example.server.services.Stagiaire_Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("stagiaire")
public class Stagiaire_controller {
	@Autowired
	Stagiaire_Service stagiare_service;
	
	@GetMapping()
	public List<Stagiaire> getAllStagiaire(){
		return stagiare_service.getall();
	}
	
	@GetMapping("/{id}")
	public Stagiaire getByIDStagiaire(@PathVariable Long id){
		Stagiaire stagiaire = stagiare_service.getById(id);
		return stagiaire;
	}
	
	@PostMapping()
	public Stagiaire Poststagiaire(@RequestBody Stagiaire stagiaire) {
		Stagiaire stagaiare1 = stagiare_service.save(stagiaire);
		return stagaiare1;
	}  
	
	@DeleteMapping("/{id}")
	public void DeleteStagiaire(@PathVariable Long id) {
		stagiare_service.delete(id);
	}
}
