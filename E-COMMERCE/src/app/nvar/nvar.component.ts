import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nvar',
  templateUrl: './nvar.component.html',
  styleUrls: ['./nvar.component.css']
})
export class NvarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
