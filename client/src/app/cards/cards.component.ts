import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  studentsN:number = 16;
  niveauStudentsN:number = 13;
  filieresN:number = 23;
  usersN:number = 45;



  getData(){
     //request ////

      //  this.studentsN = data.student_id;
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
