import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Acceuil } from './acceuil/acceuil';
import { CoursListComponent } from './cours-list/cours-list';
import { CourDetail } from './cour-detail/cour-detail';
import { CourForm } from './cour-form/cour-form';

const routes: Routes = [
  { path: '', redirectTo: '/cours', pathMatch: 'full' }, 
  { path: 'acceuil', component: Acceuil },
  { path: 'cours', component: CoursListComponent },
  { path: 'cours/:id', component: CourDetail }, 
  { path: 'ajouter-cours', component: CourForm }, 
  { path: 'modifier-cours/:id', component: CourForm }, 
  { path: '**', redirectTo: '/cours' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
