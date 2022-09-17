import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditStagiaireService {
  API = 'http://localhost:8088/stagiaire';
  id:any;
  constructor(private httpclient : HttpClient) { 

  }

  Update(stagiaire:any){
    return  this.httpclient.put(`${this.httpclient}/${this.id}`,stagiaire)
  }
  
}
