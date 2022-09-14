import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StagiairesComponent } from './stagiaires/stagiaires.component';
import { HomeComponent } from './home/home.component';
import { FilieresComponent } from './filieres/filieres.component';
import { EditerComponent } from './editer/editer.component';

const routes: Routes = [
  { path: '', component: StagiairesComponent  },
  { path: 'filieres', component: FilieresComponent  },
  { path: 'Edite', component: EditerComponent  },
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
