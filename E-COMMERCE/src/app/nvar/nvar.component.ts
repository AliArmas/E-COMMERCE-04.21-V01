import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ServiceAuthService} from '../service-auth.service'
import { AngularFireAuth } from '@angular/fire/auth'
@Component({
  selector: 'app-nvar',
  templateUrl: './nvar.component.html',
  styleUrls: ['./nvar.component.css']
})
export class NvarComponent implements OnInit {

  public user:any;
  public user$: Observable<any> = this._afAuth.user
  loggedIn: boolean = false;

  constructor(private _service :ServiceAuthService,private router:Router,private _afAuth:AngularFireAuth) { }

  async ngOnInit(){
    
    const user = await this._service.getUser();
    if(user){
      this.loggedIn = true;
    }
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

  async logOut(){
    try{
      await this._service.signOut()
      this.router.navigate(["/login"])
    }catch(error){
      console.log(error)
    }
  }
}
