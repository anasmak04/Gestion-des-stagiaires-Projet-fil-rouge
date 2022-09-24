import { Component, OnInit,EventEmitter } from '@angular/core';
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
    filiere : {
      id_Filiere: '',
  },
    photo: '',
  };


  constructor(private dataADD: AddStagiaireServiceService,
    private router: Router) {}

  ngOnInit(): void {}

  onFileChange(event:any) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.stagiaire.patchValue({
        fileSource: file
      });
    }
  }

  PostSta() {
    // const dataADD = new FormData();
    // // dataADD.append('file', this.stagiaire.photo?.value);
    // dataADD.append('file', 'assets/5907.jpg');
    // console.log(dataADD);
    this.dataADD.PostStagiaire(this.stagiaire).subscribe((item) => {
      this.List = [item, ...this.List]
      this.EmptyInput();
      this.router.navigate(['admin/stagiaire'])
    })
  }

  EmptyInput(){
    this.stagiaire = "";
  }

}
