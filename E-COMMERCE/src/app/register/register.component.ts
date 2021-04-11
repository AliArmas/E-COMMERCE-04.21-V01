import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ServiceAuthService } from '../service-auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // pattern : any = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  registerFrom = new FormGroup({
    // ,Validators.pattern(this.pattern)]
    user: new FormControl('', [Validators.required, Validators.minLength(5)]),
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    status: new FormControl('', [Validators.required])
  })
  registerForm!: FormGroup;
  constructor(private router: Router, private _formBuild: FormBuilder, private _AuthService: ServiceAuthService) { }

  ngOnInit(): void {
    this.registerForm = this._formBuild.group({
      user: ['', Validators.requiredTrue],
      name: ['', Validators.requiredTrue],
      email: ['', Validators.requiredTrue],
      password: ['', Validators.requiredTrue],
      status: ['', Validators.requiredTrue]
    })
  }

  // saveUsuario(): void {
  //   const data = this.registerForm.value
  //   this.svc.newUsuarioAPI(data).subscribe(response =>{
  //     console.log(response);
  //   },error => {
  //     console.log(error);
  //   });
  // }--proxy-config proxy.json
  registerPy() {
    const data = this.registerForm.value;
    //this.svc.registerPost(data.user,data.name,data.email,data.password,data.status)
  }

  create() {
    const { email, password } = this.registerFrom.value;
    const user = this._AuthService.registroEmail(email, password)
    console.log("Email: " + email)
    console.log("Contraseña: " + password)
    if (user) {
      this.router.navigate(['/home'])
    }
  }

  // create(){
  //   const data = this.registerForm.value
  //   this.svc.post(data).subscribe(response =>{
  //       console.log(response);
  //     },error => {
  //     console.log(error);
  //   });
  // }
  createA() {
    console.log("hola")
  }

  get() {
    console.log("hola estamos imprimiendo desde register")
  }
}
