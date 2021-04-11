import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user:any;
  public user$: Observable<any> = this._afAuth.user

  loggedIn: boolean = false;

  constructor(private _afAuth:AngularFireAuth) { }

  ngOnInit() {
   
  }
}
