import { Component, OnInit } from '@angular/core';
import { ServiceAuthService} from '../service-auth.service'
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-nvar',
  templateUrl: './nvar.component.html',
  styleUrls: ['./nvar.component.css']
})
export class NvarComponent implements OnInit {

  user: SocialUser = new SocialUser;
  loggedIn: boolean = false;

  constructor(private _service :ServiceAuthService,private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
  

  // public user : any;
  // public logued = false;

  categorias = [
    'Consumibles',
    'Muebles',
    'Computadoras',
    'Servicio tecnico'
  ]
  
  searching(){
    console.log("hola");
  }

  logOut(){
    this._service.signOut()
  }
}
