import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  formContacUs = new FormGroup({
    fullName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    message : new FormControl('',Validators.required)
  })

  // public logued=false
  // public user:any
  // public logued=false
  // public user:any
  user: SocialUser = new SocialUser;
  loggedIn: boolean = false;

  constructor(private router : Router, private authService: SocialAuthService) { }

  async ngOnInit(){
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  redirectTo(){
    this.router.navigate(['/register'])
  }
  
  valuesEmail(){
    console.log(this.formContacUs.value)
  }
}
