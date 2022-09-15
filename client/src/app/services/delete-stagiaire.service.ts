import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterfaceStagiaire } from '../models/interface-stagiaire';

@Injectable({
  providedIn: 'root',
})
export class DeleteStagiaireService {
  API = 'http://localhost:3000/stagiaires';
  constructor(private httpclient: HttpClient) {}

  Delete(id: number) {
    return this.httpclient.delete<InterfaceStagiaire>(`${this.API}/${id}`);
  }
}
