import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { InterfaceFiliere } from '../models/interface-filiere';

@Injectable({
  providedIn: 'root',
})
export class DeleteFiliereService {
  API = environment.API_DELETE_FILIERE;
  constructor(private httpclient: HttpClient) {}

  DeleteMethod(id_Filiere: number) {
    return this.httpclient.delete<InterfaceFiliere>(`${this.API}/${id_Filiere}`);
  }

  
}
