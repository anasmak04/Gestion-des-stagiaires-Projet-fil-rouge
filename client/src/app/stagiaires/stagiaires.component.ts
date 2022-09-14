import { Component, OnInit } from '@angular/core';
import { AddStagiaireServiceService } from '../services/add-stagiaire-service.service';

@Component({
  selector: 'app-stagiaires',
  templateUrl: './stagiaires.component.html',
  styleUrls: ['./stagiaires.component.css'],
})
export class StagiairesComponent implements OnInit {
  List: any = [];
  constructor(private data: AddStagiaireServiceService) {}

  ngOnInit(): void {}

  Get() {
    this.data.getStagiaire().subscribe((result) => {
      this.List = result;
      console.log(result)
    });
  }
}
