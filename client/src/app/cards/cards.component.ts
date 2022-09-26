import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AddStagiaireServiceService } from '../services/add-stagiaire-service.service';
import { AddfiliereService } from '../services/addfiliere.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private router : Router,
    public stagiaire : AddStagiaireServiceService,
    public filiere : AddfiliereService,
    public User : AuthenticationService) { }

  ngOnInit(): void {
    this.getData();
    this.total;
    this.getDataFiliere();
    this.totalF;
    this.getDataUser();
    this.totalUser;
  }

  niveauStudentsN:number =5;
  usersN:number = 3;

  List:any =[];
  ListF:any=[];
  ListU:any=[];

  getData(){
    this.stagiaire.getStagiaire()
    .subscribe((result) => {
      this.List = result;
      
    })
  }

  get totalF() :Number{
    return this.ListF.length;
  }

 
  get total() :Number{
    return this.List.length;
  
  }

  getDataUser(){
      this.ListU = this.User.users;
  }

  get totalUser() :Number{
    return this.ListU.length;
  }



  getDataFiliere(){
    this.filiere.Get()
    .subscribe((result) => {
      this.ListF = result;
    })
  }

  event(){
    this.router.navigate(['admin/stagiaire'])
  }

  event1(){
    this.router.navigate(['admin/filieres'])
  }


  event2(){
    this.router.navigate(['admin/filieres'])
  }

  event3(){
    this.router.navigate(['utilisateur'])
  }

}
