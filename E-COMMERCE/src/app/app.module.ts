import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { NvarComponent } from './nvar/nvar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
//modulos
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//formulario
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
//http
import { HttpClientModule } from '@angular/common/http';
//import { NewProductComponent } from './CRUD/new-product/new-product.component';
//import { ListProductsComponent } from './CRUD/list-products/list-products.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    NvarComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    //AngularFireModule.initializeApp(firebaseConfig),
    //AngularFireAuthModule,
    //AngularFireModule,
    //AngularFireStorageModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
