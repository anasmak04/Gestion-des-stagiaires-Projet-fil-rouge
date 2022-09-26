import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  constructor(public data : AuthenticationService) { }
      List:any = [];
  ngOnInit(): void {
      this.get()
  }

  get(){
   this.List =  this.data.users
   console.log(this.List)
  }


}
