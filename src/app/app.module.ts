import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CapitalizePipe } from './capitalize.pipe';
import { CarComponent } from './car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    CarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
