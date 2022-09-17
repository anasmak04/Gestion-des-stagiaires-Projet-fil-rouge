import { Component, OnInit } from '@angular/core';
import { AddfiliereService } from '../services/addfiliere.service';
import { DeleteFiliereService } from '../services/delete-filiere.service';

@Component({
  selector: 'app-filieres',
  templateUrl: './filieres.component.html',
  styleUrls: ['./filieres.component.css']
})
export class FilieresComponent implements OnInit {
  List:any=[];
  searchText:any;
  constructor(private dataF : AddfiliereService,
    private dataDelete : DeleteFiliereService) { }

  ngOnInit(): void {
    this.GetFiliere();
  }


  GetFiliere(){
    this.dataF.Get().subscribe((result) => {
      this.List = result;
    })
  }


  DeleteFiliere(id_Filiere :number){
    this.dataDelete.DeleteMethod(id_Filiere).subscribe(() => {
      this.List = this.List.filter((item :{id_Filiere:number}) => item.id_Filiere !== id_Filiere)
    })
  }
}
