import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  msg = {
    to:'191287@ids.upchiapas.edu.mx',
    from : 'josealipoot@gmail.com',
    subjet : 'Sending with twilo message',
    text : 'perra madre ya estoy hasta la verga',
    html : '<strong>putamadre la perra </strong>'
  }

  // sendEmailS(){
  //   (this.msg)
  //   .then(() => {}, (error: { response: { body: any; }; }) => {
  //     console.error(error);
  //     if (error.response) {
  //       console.error(error.response.body)
  //     }
  //   });
  // }

}
