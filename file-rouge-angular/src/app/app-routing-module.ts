import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Acceuil } from './acceuil/acceuil';
import { CoursListComponent } from './cours-list/cours-list';
import { CourDetail } from './cour-detail/cour-detail';
import { CourForm } from './cour-form/cour-form';
import { AddCour } from './add-cour/add-cour';

const routes: Routes = [
  { path: '', redirectTo: '/acceuil', pathMatch: 'full' },
  { path: 'acceuil', component: Acceuil },
  { path: 'cours', component: CoursListComponent },
  { path: 'cours/:id', component: CourDetail },
  { path: 'ajouter-cours', component: AddCour },
  { path: 'modifier-cours/:id', component: CourForm },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
