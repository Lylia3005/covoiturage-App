import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditOffresComponent } from './components/offres/edit-offres/edit-offres.component';
import { NewOffresComponent } from './components/offres/new-offres/new-offres.component';
import { OffresComponent } from './components/offres/offres.component';


const routes: Routes = [
  {
    path:"offres",component:OffresComponent
  },
  {
    path:"newOffre",component:NewOffresComponent
  },
  {
    path:"editOffre/:id",component:EditOffresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
