import { Component, OnInit } from '@angular/core';
import { AddfiliereService } from '../services/addfiliere.service';

@Component({
  selector: 'app-filieres',
  templateUrl: './filieres.component.html',
  styleUrls: ['./filieres.component.css']
})
export class FilieresComponent implements OnInit {
  List:any=[];
  constructor(private dataF : AddfiliereService) { }

  ngOnInit(): void {
    this.GetFiliere();
  }


  GetFiliere(){
    this.dataF.Get().subscribe((result) => {
      this.List = result;
    })
  }
}
