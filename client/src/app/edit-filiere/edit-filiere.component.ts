import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditFiliereService } from '../services/edit-filiere.service';

@Component({
  selector: 'app-edit-filiere',
  templateUrl: './edit-filiere.component.html',
  styleUrls: ['./edit-filiere.component.css'],
})
export class EditFiliereComponent implements OnInit {
  filiere: any = {
    id_Filiere: '',
    filiere: '',
    niveau: '',
  };

  constructor(private editdata: EditFiliereService,
    private router: Router) {}

  ngOnInit(): void {}

  PutMethod() {
    this.editdata.MethodeUpdate(this.filiere).subscribe((test) => {
      console.log(test)
      this.Empty();
      this.router.navigate(['filieres'])
    });
  }

  Empty() {
    this.filiere = '';
  }

  
}
