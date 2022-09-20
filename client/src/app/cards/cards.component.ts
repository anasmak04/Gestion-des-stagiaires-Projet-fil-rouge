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
