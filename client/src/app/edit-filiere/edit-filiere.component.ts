import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  curr_id!: number;

  constructor(private editdata: EditFiliereService,
    private router: Router, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.curr_id = params['id']  
    });
    
    const data = this.editdata.getFiliere(this.curr_id);
    data.subscribe({
      next: (filiere) => 
      {
        console.log(filiere);
        this.filiere = filiere;
      },
      error: (e) => 
      {
        this.router.navigate(['admin/filieres'])
        console.error(e);
      }     
    });

  }

  PutMethod() {
    this.editdata.MethodeUpdate(this.filiere).subscribe((test) => {
      console.log(test)
      this.Empty();
      this.router.navigate(['admin/filieres'])
    });
  }

  Empty() {
    this.filiere = '';
  }

  
}
