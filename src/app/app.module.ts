import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TestModuleModule } from './test-module/test-module.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

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
import { PhotosComponent } from './photos/photos.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ReverseStrPipe } from './reversestr.pipe';
import { BeforeAfterPipe } from './beforeafetr.pipe';
import { ObservableDataComponent } from './observabledata.component';


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
    path:'photos',
    component: PhotosComponent
  },
  {
    path:'register',
    component: SignUpFormComponent
  },
  {
    path:'reactiveform',
    component: ReactiveFormComponent
  },
  {
    path:'asyncpipe',
    component: ObservableDataComponent
  },
  {
    path:'pipedemo',
    component: PipeDemoComponent
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
    ProductDetailsComponent,
    PhotosComponent,
    SignUpFormComponent,
    ReactiveFormComponent,
    PipeDemoComponent,
    ReverseStrPipe,
    BeforeAfterPipe,
    ObservableDataComponent
  ],
  imports: [
    BrowserModule,
    TestModuleModule,
    FormsModule,
    AngularWebStorageModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
