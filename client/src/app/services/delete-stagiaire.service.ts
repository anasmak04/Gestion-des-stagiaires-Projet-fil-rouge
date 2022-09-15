import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeleteStagiaireService {
  API = 'http://localhost:3000/stagiaires';
  constructor(private httpclient: HttpClient) {}

  Delete(id: number) {
    return this.httpclient.delete(`${this.API}/${id}`);
  }
}
