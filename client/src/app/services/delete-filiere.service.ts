import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeleteFiliereService {
  API = 'http://localhost:3000/Filieres';

  constructor(private httpclient: HttpClient) {}

  DeleteMethod(id: number) {
    return this.httpclient.delete(`${this.API}/${id}`);
  }

  
}
