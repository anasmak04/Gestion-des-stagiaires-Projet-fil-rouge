import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private dataADD: AddStagiaireServiceService,
    private router: Router) {}

  ngOnInit(): void {}

  PostSta() {
    this.dataADD.PostStagiaire(this.stagiaire).subscribe((item) => {
      this.List = [item, ...this.List]
      this.EmptyInput();
      this.router.navigate([''])
    })

  }

  EmptyInput(){
    this.stagiaire = "";
  }


  log(a:any){
    console.log(a)
  }
}
