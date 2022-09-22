import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router, public authservice : AuthenticationService) { }

  ngOnInit(): void {
  }

  Handlelogout(){
        this.authservice.logout().subscribe({
          next : (data) => {
            this.router.navigateByUrl("")
          }
        })
  }

}
