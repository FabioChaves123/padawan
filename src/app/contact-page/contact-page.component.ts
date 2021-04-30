import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  public descricao: string = "Estamos localizados na página de contato"
  public contactList: Array<string> = [];
  public nomeDigitado: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestrov() {
    if(this.contactList.length){

    }

  }

  ngOnChanges(){


  }

  public updateContactList(){
    if (this.nomeDigitado) {
      this.contactList.push(this.nomeDigitado + "@exemplo.com")
    }

  }


}
