import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { InterfaceStagiaire } from '../models/interface-stagiaire';

@Injectable({
  providedIn: 'root',
})
export class AddStagiaireServiceService {
  constructor(private httpclient: HttpClient) {}
  API = environment.API_GET_POST;
  getStagiaire() {
    return this.httpclient.get(this.API);
  }

  PostStagiaire(stagiaire: any) {
    return this.httpclient.post(this.API, stagiaire);
  }
}
