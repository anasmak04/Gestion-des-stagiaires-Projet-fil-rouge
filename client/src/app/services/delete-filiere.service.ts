import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterfaceFiliere } from '../models/interface-filiere';

@Injectable({
  providedIn: 'root',
})
export class DeleteFiliereService {
  API = 'http://localhost:3000/Filieres';

  constructor(private httpclient: HttpClient) {}

  DeleteMethod(id: number) {
    return this.httpclient.delete<InterfaceFiliere>(`${this.API}/${id}`);
  }

  
}
