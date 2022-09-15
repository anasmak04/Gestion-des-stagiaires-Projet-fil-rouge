import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddfiliereService {
  API = 'http://localhost:3000/Filieres';
  constructor(private httpclient : HttpClient) {

   }

   Get(){
    return this.httpclient.get(this.API);
   }

   AddFiliere(Filieres :any){
    return this.httpclient.post(this.API,Filieres)
   }


}
