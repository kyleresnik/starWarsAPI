import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwapiDisplayComponent } from './swapi-display/swapi-display.component';
import { PeopleService } from './people.service';
import { FilmsService } from './films.service';
import { ShipsService } from './ships.service';

@NgModule({
  declarations: [
    AppComponent,
    SwapiDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    HttpClient,
    PeopleService,
    FilmsService,
    ShipsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
