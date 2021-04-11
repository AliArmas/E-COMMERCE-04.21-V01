import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ServiceAuthService } from '../service-auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  resetEmail = new FormControl('');
  // loginForm!: FormGroup
  loginFrom = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  })
  loginForm!: FormGroup
  constructor(private router: Router, private _formBuider : FormBuilder, private _AUTHSERVICE: ServiceAuthService) { }
    ngOnInit(): void {
    this.loginForm = this._formBuider.group({
      user: [''],
      password:[''],
    })  
  }

  login(){
    const {user,password} = this.loginForm.value
    this._AUTHSERVICE.login(user,password)
  }

  onRegisterGoogle(){
    this._AUTHSERVICE.signInWithGoogle()
  }
  
  onRegisterFacebook(){
    this._AUTHSERVICE.signInWithFB() 
  }

  resetPassword(){
    console.log("reset")
  }
}
