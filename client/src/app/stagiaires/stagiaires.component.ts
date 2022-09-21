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
  searchText:any;
  searchSelect:any;

  p: Number = 1;
  count: Number = 5;



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
    this.dataDelete.Deletemethod(id).subscribe(() => {
      this.List = this.List.filter((item:{id:number}) => item.id !== id)
      alert(" are you sure  you want to delete it")
      console.log("from delete")
    })
  }
  

  // open() {
  //   const modalRef = this.modalService.open(NgbdModalContent);
  //   modalRef.componentInstance.name = 'World';
  // }

  
}
