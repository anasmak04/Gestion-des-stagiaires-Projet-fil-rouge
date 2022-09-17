import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterfaceFiliere } from '../models/interface-filiere';

@Injectable({
  providedIn: 'root'
})
export class AddfiliereService {
  API = 'http://localhost:8088/filiere';
  constructor(private httpclient : HttpClient) {
   }
   
  

   Get(){
    return this.httpclient.get<InterfaceFiliere>(this.API);
   }

   AddFiliere(filiere :any){
    return this.httpclient.post(this.API,filiere)
   }


}
