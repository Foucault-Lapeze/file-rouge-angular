import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CoursList } from './cours-list/cours-list';
import { CourDetail } from './cour-detail/cour-detail';
import { CourForm } from './cour-form/cour-form';

@NgModule({
  declarations: [
    App,
    CoursList,
    CourDetail,
    CourForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
