import { Component, OnInit } from '@angular/core';
import { AddfiliereService } from '../services/addfiliere.service';

@Component({
  selector: 'app-add-filiere',
  templateUrl: './add-filiere.component.html',
  styleUrls: ['./add-filiere.component.css']
})
export class AddFiliereComponent implements OnInit {

  Filieres:any = {
    id : "",
    nom : "",
    niveau : ""
  }
  List: any = [];
      
  constructor(private AddF : AddfiliereService) { }

  ngOnInit(): void {
  }


  PostMethod(){
    this.AddF.AddFiliere(this.Filieres).subscribe((item) => {
      this.List = [item,...this.List]
      this.EmptyInput();
    })
  }

  EmptyInput(){
    this.Filieres= "";
  }
}
