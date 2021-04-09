import { Component, OnInit } from '@angular/core';
import  jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Gquotation(){
    const doc = new jsPDF();
    doc.text('Hello World!', 10,10)

    // doc.fromHTML(document.getElementById(''), 10,10);
    doc.save('Lista de equipos');
  }
  contenedor(){
    const contenedor = document.querySelector('#contenedor');
    contenedor?.classList.toggle('active');
    // document.querySelector('#boton-menu').addEventListener('click',() =>{
      
    // });
    
  }
  
}
