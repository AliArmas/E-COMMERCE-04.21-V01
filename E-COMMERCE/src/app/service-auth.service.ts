import { Injectable } from '@angular/core';
//FIREBASE
import { AngularFireAuth } from '@angular/fire/auth';


//operadores
import { first } from 'rxjs/operators'
import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})


export class ServiceAuthService {
  constructor(private _fireAuth: AngularFireAuth) { }
  //login con email
  async login(username: string,password: string) {
    const result = await this._fireAuth.signInWithEmailLink(username, password);
    return result;
  }
  //registro con email
  async registroEmail(email: string, password: string) {
    const result = await this._fireAuth.createUserWithEmailAndPassword(email,password);
    return result;
  }

  async signInWithGoogle(){ 
    return await this._fireAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider)
  }
  async signInWithFB(){ 
    return await this._fireAuth.signInWithPopup(new firebase.default.auth.FacebookAuthProvider)
  }
  //deslogueo de usuario
  async signOut() {
    try {
      await this._fireAuth.signOut()
    } catch (error) {
      console.log(error)
    }
  }
  //obtencion del usuario logueado
  getUser() {
    return this._fireAuth.authState.pipe(first()).toPromise()
  }
   





}

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     Authorization: ''
//   })
// };
// httpOptions.headers = httpOptions.headers.set('Authorization', 'KlUz28dW8CseY3E6DGW18X6z');
