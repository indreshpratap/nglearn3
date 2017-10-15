import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from "./footer/footer.component";
import { ProductComponent } from "app/products/product.component";
import { ProductListComponent } from "app/products/productlist.component";
import { HomeComponent } from "app/home/home.component";
import { ProductDetailsComponent } from "app/products/productdetail.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
   ],

  bootstrap: [AppComponent]
})
export class AppModule { }
