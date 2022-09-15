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


  DeleteFiliere(id :number){
    this.dataDelete.DeleteMethod(id).subscribe(() => {
      this.List = this.List.filter((item :{id:number}) => item.id !== id)
    })
  }
}
