import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterfaceStagiaire } from '../models/interface-stagiaire';

@Injectable({
  providedIn: 'root',
})
export class DeleteStagiaireService {
  API = 'http://localhost:8088/stagiaire';
  
  constructor(private httpclient: HttpClient) {}

  Deletemethod(id: number) {
    return this.httpclient.delete<InterfaceStagiaire>(`${this.API}/${id}`);
  }

  
}
