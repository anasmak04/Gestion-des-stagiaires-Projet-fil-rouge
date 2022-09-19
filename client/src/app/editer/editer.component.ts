import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  EditStagiaireService } from '../services/edit-stagiaire.service';

@Component({
  selector: 'app-editer',
  templateUrl: './editer.component.html',
  styleUrls: ['./editer.component.css']
})
export class EditerComponent implements OnInit {
  List: any = [];
  stagiaire: any = {
    id: '',
    nom: '',
    prenom: '',
    filiere : {
      id_Filiere: '',
  },
    photo: '',
  };

  curr_id!: number;


  constructor(private dataEdit : EditStagiaireService,
    private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  //  this.dataEdit.getInfo();
    // this.stagiaire.nom = "hhhh";
    this.route.params.subscribe( params => {
      this.curr_id = params['id']  
  });
  const data = this.dataEdit.getStagi(this.curr_id);
  data.subscribe({
    next: (stagiaire) => 
    {
      console.log(stagiaire);
      this.stagiaire = stagiaire;
    },
    error: (e) => 
    {
      this.router.navigate([''])
      console.error(e);
    }     
  });
}

  PutMethodee(){
    this.dataEdit.Update(this.stagiaire)
    .subscribe(stag => {
      console.log(stag)
      this.EmptyInput();
      this.router.navigate([''])

    });
  }


  EmptyInput(){
    this.stagiaire = "";
  }

}
