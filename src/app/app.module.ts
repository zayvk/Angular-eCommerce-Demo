import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TestModuleModule } from './test-module/test-module.module';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

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
import { PageNotFoundComponent } from './page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes:Routes = [
  {
    path:'',//Default,
    redirectTo: 'greet',
    pathMatch:'full'
  },
  {
    path:'greet',
    component:GreetComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'products',
    component:ProductsComponent,
     children:[{
       path:'productdetails/:id',
       component:ProductDetailsComponent
     }]
  },
  {
    path:'my cart',
    component:CartDetailComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }

]


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
    ProfileComponent,
    PageNotFoundComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    TestModuleModule,
    FormsModule,
    AngularWebStorageModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
