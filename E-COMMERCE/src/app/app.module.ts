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

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';

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
    SocialLoginModule,
    //AngularFireModule.initializeApp(firebaseConfig),
    //AngularFireAuthModule,
    //AngularFireModule,
    //AngularFireStorageModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '526256856014-e7sl7jlj3md0o2aild8dqllvu03cmllo.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('3865198483600867')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
