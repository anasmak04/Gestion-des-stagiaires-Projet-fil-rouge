import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { InterfaceStagiaire } from '../models/interface-stagiaire';

@Injectable({
  providedIn: 'root',
})
export class EditStagiaireService {
  API = environment.API_Edit_Stagiaire;
  constructor(private httpclient: HttpClient) {}

  getStagi(id: number) {
    return this.httpclient.get<InterfaceStagiaire>(`${this.API}/${id}`);
  }

  Update(stagiaire: any) {
    return this.httpclient.put(`${this.API}/${stagiaire.id}`, stagiaire);
  }
}
