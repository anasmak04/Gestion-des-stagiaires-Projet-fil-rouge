import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterfaceFiliere } from '../models/interface-filiere';

@Injectable({
  providedIn: 'root',
})
export class DeleteFiliereService {
  API = 'http://localhost:8088/filiere';

  constructor(private httpclient: HttpClient) {}

  DeleteMethod(id_Filiere: number) {
    return this.httpclient.delete<InterfaceFiliere>(`${this.API}/${id_Filiere}`);
  }

  
}
