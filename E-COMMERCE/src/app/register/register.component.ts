import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { ServiceAuthService } from '../service-auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // pattern : any = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  
  
  
  constructor(private sanitizer: DomSanitizer,private router: Router, private _formBuild: FormBuilder, private _AuthService: ServiceAuthService) { }
  
  public archivo :any = [];
  registerFrom = new FormGroup({
    // ,Validators.pattern(this.pattern)]
    user: new FormControl('', [Validators.required, Validators.minLength(5)]),
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    img : new FormControl('',[Validators.required]),

    // status: new FormControl('', [Validators.required])
  })
  
  ngOnInit(): void {
    this.registerFrom = this._formBuild.group({
      user: ['', Validators.requiredTrue],
      name: ['', Validators.requiredTrue],
      email: ['', Validators.requiredTrue],
      password: ['', Validators.requiredTrue],
      // status: ['', Validators.requiredTrue]
      img:['img',],
    })
  }

  capturaFile(_event: any){
    const getFile =_event.target.files[0]; 
    // this.blobFile(getFile).then( imagen =>{
    //   console.log(imagen)
    // })
    console.log(_event.target.files[0])
  }
  // blobFile = async ($event: any) => new Promise((resolve, reject ) => {
  //   try {
  //     const unsafeImg = window.URL.createObjectURL($event);
  //     const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
  //     const reader = new FileReader();
  //     reader.readAsDataURL($event);
  //     reader.onload = () => {
  //       resolve({
  //         blob: $event,
  //         image,
  //         base: reader.result
  //       });
  //     };
  //     reader.onerror = error => {
  //       resolve({
  //         blob: $event,
  //         image,
  //         base: null
  //       });
  //     };

  //   } catch (e) {
  //     return null;
  //   }
  // })
  // saveUsuario(): void {
  //   const data = this.registerForm.value
  //   this.svc.newUsuarioAPI(data).subscribe(response =>{
  //     console.log(response);
  //   },error => {
  //     console.log(error);
  //   });
  // }--proxy-config proxy.json
  registerPy() {
    const data = this.registerFrom.value;
    console.log(data)
    //this.svc.registerPost(data.user,data.name,data.email,data.password,data.status)
  }

  create() {
    const { email, password,img } = this.registerFrom.value;
    const user = this._AuthService.registroEmail(email, password)
    console.log("Email: " + email)
    console.log("Contraseña: " + password)
    console.log("imagen"+img);
  }
  //   });
  // }
  createA() {
    console.log("hola")
  }

  get() {
    console.log("hola estamos imprimiendo desde register")
  }
}
