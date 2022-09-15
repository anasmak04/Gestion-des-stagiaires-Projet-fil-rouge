import { Component, OnInit } from '@angular/core';
import { AddStagiaireServiceService } from '../services/add-stagiaire-service.service';
import { DeleteStagiaireService } from '../services/delete-stagiaire.service';

@Component({
  selector: 'app-stagiaires',
  templateUrl: './stagiaires.component.html',
  styleUrls: ['./stagiaires.component.css'],
})
export class StagiairesComponent implements OnInit {
  List: any = [];
  constructor(private data: AddStagiaireServiceService, 
    private dataDelete : DeleteStagiaireService) {}

  ngOnInit(): void {
    this.Get();
  }

  Get() {
    this.data.getStagiaire().subscribe((result) => {
      this.List = result;
      console.log(result)
    });
  }

  DeleteStagiaire(id :number){
    this.dataDelete.Delete(id).subscribe(() => {
      this.List = this.List.filter((item:{id:number}) => item.id !== id)
    })
  }
}
