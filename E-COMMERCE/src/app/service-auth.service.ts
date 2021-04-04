import { Injectable } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
//http
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ServiceAuthService {
  
  constructor(private authService: SocialAuthService) { }


  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'KlUz28dW8CseY3E6DGW18X6z'
  })
};
httpOptions.headers = httpOptions.headers.set('Authorization', 'KlUz28dW8CseY3E6DGW18X6z');
