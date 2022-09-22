import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AddStagiaireServiceService } from '../services/add-stagiaire-service.service';
import { AddfiliereService } from '../services/addfiliere.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private router : Router,
    public stagiaire : AddStagiaireServiceService,
    public filiere : AddfiliereService) { }

  ngOnInit(): void {
    this.getData();
    this.total;
    this.getDataFiliere();
    this.totalF;
  }
  niveauStudentsN:number =5;
  usersN:number = 3;

  List:any =[];
  ListF:any=[];
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

  


  getDataFiliere(){
    this.filiere.Get()
    .subscribe((result) => {
      this.ListF = result;
    })
  }

  event(){
    this.router.navigate([''])
  }

  event1(){
    this.router.navigate(['filieres'])
  }


  event2(){
    this.router.navigate(['filieres'])
  }

  event3(){
    this.router.navigate(['utilisateur'])
  }

}
