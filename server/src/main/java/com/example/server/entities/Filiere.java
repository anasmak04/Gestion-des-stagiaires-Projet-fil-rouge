package com.example.server.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "id_Filiere")
public class Filiere {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_Filiere;
	private String Filiere;
	private String Niveau;
	@OneToMany(mappedBy = "filiere",fetch = FetchType.EAGER)
	private List<Stagiaire> stagiaire;
}
