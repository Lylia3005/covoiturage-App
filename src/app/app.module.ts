import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffresComponent } from './components/offres/offres.component';
import { NavbarComponent } from './components/offres/navbar/navbar.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {  StoreDevtoolsModule } from '@ngrx/store-devtools';
import { offresReducer } from './ngrx/offres.reducer';
import { OffresEffects } from './ngrx/offres.effects';
import { OffresListComponent } from './components/offres/offres-list/offres-list.component';
import { OffreItemComponent } from './components/offres/offres-list/offre-item/offre-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewOffresComponent } from './components/offres/new-offres/new-offres.component';
import { EditOffresComponent } from './components/offres/edit-offres/edit-offres.component';


@NgModule({
  declarations: [
    AppComponent,
    OffresComponent,
    NavbarComponent,
    OffresListComponent,
    OffreItemComponent,
    NewOffresComponent,
    EditOffresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({catalogState:offresReducer}),
    EffectsModule.forRoot([OffresEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
