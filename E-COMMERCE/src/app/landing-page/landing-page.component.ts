import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//service
import { ServiceAuthService } from '../service-auth.service'


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  formContacUs = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  })

  // public logued=false
  // public user:any
  // public logued=false
  // public user:any

  loggedIn: boolean = false;

  constructor(private router: Router, private _svc: ServiceAuthService) { }

  async ngOnInit() {
    const user = await this._svc.getUser()
    if (user) {
      this.loggedIn = true
    }
  }

  redirectTo() {
    this.router.navigate(['/register'])
  }

  valuesEmail() {
    console.log(this.formContacUs.value)
  }
}
