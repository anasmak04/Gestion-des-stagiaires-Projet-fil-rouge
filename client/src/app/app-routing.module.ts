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

const routes: Routes = [
  { path: '', component: StagiairesComponent  },
  { path: 'filieres', component: FilieresComponent  },
  { path: 'Edite', component: EditerComponent  },
  { path: 'AddStagiaire', component: AddStagiaireComponent  },
  { path: 'AddFiliere', component: AddFiliereComponent  },
  { path: 'editFiliere', component: EditFiliereComponent  },
  { path: 'utilisateur', component: UtilisateurComponent  },
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
