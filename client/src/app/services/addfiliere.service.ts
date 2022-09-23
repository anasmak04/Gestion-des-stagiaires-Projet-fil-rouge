import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { InterfaceFiliere } from '../models/interface-filiere';

@Injectable({
  providedIn: 'root'
})
export class AddfiliereService {

  API = environment.API_Filieres_Get_Post;
  constructor(private httpclient : HttpClient) {
   }
   
  

   Get(){
    return this.httpclient.get<InterfaceFiliere>(this.API);
   }

   AddFiliere(filiere :any){
    return this.httpclient.post(this.API,filiere)
   }


}
