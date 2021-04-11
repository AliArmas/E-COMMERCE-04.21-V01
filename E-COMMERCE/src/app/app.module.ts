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
import { FreqQuestComponent } from './freq-quest/freq-quest.component';
import { BillComponent } from './bill/bill.component';
import { QuotationComponent } from './quotation/quotation.component';
//import { NewProductComponent } from './CRUD/new-product/new-product.component';
//import { ListProductsComponent } from './CRUD/list-products/list-products.component';

import {  AngularFireAuthModule,  } from '@angular/fire/auth'
import { AngularFireModule } from '@angular/fire'
import { firebaseConfig } from 'src/environments/firebase';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    NvarComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    LandingPageComponent,
    FreqQuestComponent,
    BillComponent,
    QuotationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
