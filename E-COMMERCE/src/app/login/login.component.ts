import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceAuthService } from '../service-auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  resetEmail = new FormControl('');
  loginForm!: FormGroup
 
  constructor(private router: Router, private _formBuider : FormBuilder, private _AUTHSERVICE: ServiceAuthService) { }
    ngOnInit(): void {
    this.loginForm = this._formBuider.group({
      user: [''],
      password:[''],
    })  
  }

  login(){
    console.log(this.loginForm.value)
  }

  onRegisterGoogle(){
    this._AUTHSERVICE.signInWithGoogle()
    location.reload()
  }
  
  onRegisterFacebook(){
    console.log("Registro en facebook")
  }

  resetPassword(){
    console.log("")
  }
  
}
