import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CryptoDataService } from "./services/crypto-data.service";
import { MapToIterablePipe } from './pipes/map-to-iterable.pipe';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MapToIterablePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CryptoDataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
