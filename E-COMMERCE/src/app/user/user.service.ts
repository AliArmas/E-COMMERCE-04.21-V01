import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user$:Observable<any>=this.auth.user;

  constructor(private auth:AngularFireAuth) { }

}
