import { Component, OnInit } from '@angular/core';
import { AddStagiaireServiceService } from '../services/add-stagiaire-service.service';

@Component({
  selector: 'app-add-stagiaire',
  templateUrl: './add-stagiaire.component.html',
  styleUrls: ['./add-stagiaire.component.css']
})
export class AddStagiaireComponent implements OnInit {
  List:any=[];
  constructor() { }

  ngOnInit(): void {
  }


 

}
