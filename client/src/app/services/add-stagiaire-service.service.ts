import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterfaceStagiaire } from '../models/interface-stagiaire';

@Injectable({
  providedIn: 'root',
})
export class AddStagiaireServiceService {
  API = 'http://localhost:3000/stagiaires';
  constructor(private httpclient: HttpClient) {}

  getStagiaire() {
    return this.httpclient.get(this.API);
  }

  PostStagiaire(stagiaires:any){
    return this.httpclient.post<InterfaceStagiaire>(this.API,stagiaires)
  }

  
}
