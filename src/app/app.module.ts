import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TestModuleModule } from './test-module/test-module.module';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { ManualComponent } from './ManuallyCreated.component';
import { MenuComponent } from './menu/menu.component';
import { ProductsComponent } from './Products/products.component';
import { LoginComponent } from './login/login.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CartDetailComponent } from './cart/cart-details.component';
import { AngularWebStorageModule } from "angular-web-storage";
import { HeaderComponent } from './header.component';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    ManualComponent,
    MenuComponent,
    ProductsComponent,
    LoginComponent,
    AddToCartComponent,
    CartDetailComponent,
    HeaderComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    TestModuleModule,
    FormsModule,
    AngularWebStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
