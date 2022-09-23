import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { InterfaceFiliere } from '../models/interface-filiere';

@Injectable({
  providedIn: 'root'
})
export class EditFiliereService {
  API = environment.API_EDIT_Filiere;
  constructor(private httpclient : HttpClient) { }



  getFiliere(id: number){
    return this.httpclient.get<InterfaceFiliere>(`${this.API}/${id}`);
  }
  MethodeUpdate(filiere : any){

    console.log(typeof filiere);
    
    const body = {    
    id_Filiere : 1,
    filiere : "kkkk",
    niveau : "T"
    // ,
    // stagiaire: [
    //   {
    //     id: 1,
    //     nom: "bilal",
    //     prenom: "elmakaoui",
    //     photo: "",
    //     filiere: 1
    //   }
  // ]

 };
    
 return this.httpclient.put<InterfaceFiliere>(`${this.API}/${filiere.id_Filiere}`, filiere);

  }

}
