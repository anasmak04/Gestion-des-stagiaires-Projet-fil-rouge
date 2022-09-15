import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditStagiaireService {
  API = 'http://localhost:3000/stagiaires';
  id:any;
  constructor(private httpclient : HttpClient) { 

  }

  Update(stagiaires:any){
    return  this.httpclient.put(`${this.httpclient}/${this.id}`,stagiaires)
  }
}
