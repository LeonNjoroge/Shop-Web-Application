import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { SuccessComponent } from './success/success.component';
import { CartComponent } from './cart/cart.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    
    
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    SuccessComponent,
    CartComponent,
    ImageSliderComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
