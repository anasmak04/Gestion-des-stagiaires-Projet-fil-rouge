import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StagiairesComponent } from './stagiaires/stagiaires.component';
import { HomeComponent } from './home/home.component';
import { FilieresComponent } from './filieres/filieres.component';
import { EditerComponent } from './editer/editer.component';
import { AddStagiaireComponent } from './add-stagiaire/add-stagiaire.component';
import { AddFiliereComponent } from './add-filiere/add-filiere.component';
import { EditFiliereComponent } from './edit-filiere/edit-filiere.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { LoginComponent } from './login/login.component';
import { CardsComponent } from './cards/cards.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { AuthenticationGuard } from './guards/authentication.guard';
// import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
 
  { path: 'stagiaire/edit/:id', component: EditerComponent  },
  { path: 'stagiaire/AddStagiaire', component: AddStagiaireComponent  },
  { path: 'filieres/AddFiliere', component: AddFiliereComponent  },
  { path: 'filieres/edit/:id', component: EditFiliereComponent  },
  // { path: 'filieres/edit', component: EditFiliereComponent  },
  { path: '', component: LoginComponent  },
  { path: 'admin', component: AdminTemplateComponent,canActivate : [AuthenticationGuard], children :[
    { path: 'utilisateur', component: UtilisateurComponent  },
    { path: 'cards', component: CardsComponent  },
    { path: 'stagiaire', component: StagiairesComponent  },
    { path: 'filieres', component: FilieresComponent},
  ] },

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
