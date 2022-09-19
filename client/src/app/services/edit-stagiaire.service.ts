import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterfaceStagiaire } from '../models/interface-stagiaire';

@Injectable({
  providedIn: 'root'
})
export class EditStagiaireService {
  API = 'http://localhost:8088/stagiaire';
  constructor(private httpclient : HttpClient) { 

  }

  getStagi(id :number){
    return this.httpclient.get<InterfaceStagiaire>(`${this.API}/${id}`);

  }

  Update(stagiaire:any){
    return  this.httpclient.put(`${this.httpclient}/${stagiaire.id}`,stagiaire)
  }
  
}
