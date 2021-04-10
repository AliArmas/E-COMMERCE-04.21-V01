import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import domtoimage from 'dom-to-image';
import { CanvasElement, NgCanvasElement, NgCanvas,CanvasComponent } from 'angular-canvas';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pdf(){
    var canvas = document.getElementById('pdf');

    domtoimage.toPng(canvas).then((dataUrl)=>{
        let imagen= new Image();
        imagen.src=dataUrl;/*obtengo el screenshot*/
        let pdf = new jsPDF('l','mm','A4');/* creamos el pdf con jspdf, l es de landscape, mm: medidas en milímetros, y A4 el formato*/
        pdf.addImage( imagen, 18, 10, 260,189); /*imagen: es la captura que insertaremos en el pdf, 18: margen izquierdo, 10: margen superior, 260:ancho, 189:alto, pueden jugar con estos valores, de esta forma me quedó prolijo en A4 horizontal*/
        pdf.save( 'coti.pdf' ); /* descargamos el pdf con ese nombre.*/
    }
    );
  }
  contenedor(){
    const contenedor = document.querySelector('#contenedor');
    contenedor?.classList.toggle('active');
    
  }
  
}
