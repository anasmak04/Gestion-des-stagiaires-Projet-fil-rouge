import { Component, OnInit } from '@angular/core';
import { AddStagiaireServiceService } from '../services/add-stagiaire-service.service';

@Component({
  selector: 'app-add-stagiaire',
  templateUrl: './add-stagiaire.component.html',
  styleUrls: ['./add-stagiaire.component.css'],
})
export class AddStagiaireComponent implements OnInit {
  List: any = [];
  stagiaire: any = {
    id: '',
    nom: '',
    prenom: '',
    filiere: '',
    photo: '',
  };
  constructor(private dataADD: AddStagiaireServiceService) {}

  ngOnInit(): void {}

  Post() {
    this.dataADD.PostStagiaire(this.stagiaire).subscribe((item) => {
      this.List = [item, ...this.List]
    })

  }
  
}
