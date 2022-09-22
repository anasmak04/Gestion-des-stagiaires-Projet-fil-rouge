import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { InterfaceStagiaire } from '../models/interface-stagiaire';

@Injectable({
  providedIn: 'root',
})
export class DeleteStagiaireService {
  API = environment.API_DELETE_STAGIAIRE;  
  constructor(private httpclient: HttpClient) {}

  Deletemethod(id: number) {
    return this.httpclient.delete<InterfaceStagiaire>(`${this.API}/${id}`);
  }

  
}
