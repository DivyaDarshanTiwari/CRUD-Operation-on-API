import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDataService } from './user-data.service';
import { HttpClientModule } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JsonPipe
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
