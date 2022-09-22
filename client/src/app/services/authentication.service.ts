import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/user';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  users:User[] = [];
  authenticatedUser : User | undefined
  
  constructor() {
    this.users.push({username : "user1", password : "anuser", roles :["USER"]});
    this.users.push({username : "user2", password : "anuser", roles :["USER"]});
    this.users.push({username : "admin", password : "anuser", roles :["USER","ADMIN"]});
    this.users.push({username : "simplon", password : "simplon123", roles :["USER","ADMIN"]});
   }

   public Login(username : String,password:String):Observable<User>{
       let findUser = this.users.find(us => us.username == username)
      
        if(!findUser)
          return throwError (() => new Error("USERNAME NOT fOUND"))
        

        if(findUser.password != password)
          return throwError (() => new Error("password incorrect"))

        return of(findUser);
        
   }

   public authenticateUser(findUser:User):Observable<boolean>{
      this.authenticatedUser = findUser;
      localStorage.setItem("authUser", JSON.stringify({username:findUser.username,role : findUser.roles,jwt:"JWT_TOKEN"}));
        return of(true);
    }


    public hasRole(role : String) : boolean{
      return this.authenticatedUser!.roles.includes(role);
    }


    public isAuthenticated(){
      return this.authenticatedUser!= undefined
    }


    public logout():Observable<Boolean>{
      this.authenticatedUser=undefined;
      localStorage.removeItem("authUser")
      return of(true)
    }
}





