import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CoursListComponent } from './cours-list/cours-list';
import { CourDetail } from './cour-detail/cour-detail';
import { CourForm } from './cour-form/cour-form';
import { Acceuil } from './acceuil/acceuil';
import { Header } from './header/header';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    CoursListComponent,
    CourDetail,
    CourForm,
    Acceuil,
    Header,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
