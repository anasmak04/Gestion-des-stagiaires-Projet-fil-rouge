import { Component, OnInit } from '@angular/core';
import { EditFiliereService } from '../services/edit-filiere.service';

@Component({
  selector: 'app-edit-filiere',
  templateUrl: './edit-filiere.component.html',
  styleUrls: ['./edit-filiere.component.css'],
})
export class EditFiliereComponent implements OnInit {
  filiere: any = {
    id: '',
    nom: '',
    niveau: '',
  };

  constructor(private editdata: EditFiliereService) {}

  ngOnInit(): void {}

  PutMethod() {
    this.editdata.MethodeUpdate(this.filiere).subscribe((test) => {
      console.log("aaa" +test)
      this.Empty();
    });
  }

  Empty() {
    this.filiere = '';
  }
}
