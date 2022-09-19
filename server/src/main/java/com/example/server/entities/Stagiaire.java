package com.example.server.entities;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.*;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class,property = "id")
public class Stagiaire {
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Basic(optional = false)
	
	private Long id;
	private String nom;
	private String prenom;
	private String photo;
	
	@ManyToOne
	@JoinColumn(name = "id_Filiere")
	private Filiere filiere; 
	
}
