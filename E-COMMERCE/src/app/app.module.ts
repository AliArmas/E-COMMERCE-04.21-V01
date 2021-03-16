import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { NvarComponent } from './nvar/nvar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    NvarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
