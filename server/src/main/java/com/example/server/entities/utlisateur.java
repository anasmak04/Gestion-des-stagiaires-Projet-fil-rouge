package com.example.server.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class utlisateur {
		@Id @GeneratedValue(strategy = GenerationType.IDENTITY)

		private String username;
		private String password;
		private String role;
}
