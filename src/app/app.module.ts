import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwapiDisplayComponent } from './swapi-display/swapi-display.component';

@NgModule({
  declarations: [
    AppComponent,
    SwapiDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
