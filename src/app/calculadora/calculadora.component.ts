import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  public firstValue;
  public secondValue;
  public titulo: string;
  public description: string;
  public operators = [ '+', '-', '*', '/'];

  constructor(private calcService:CalculadoraService) { }

  ngOnInit(): void {
    this.titulo = "Calculadora do Fábio";
    this.description = "Descrição: Mais rápida que o pensamento";

  }

  public doOperation(operator: string){
    if (!Number(this.firstValue)||!Number(this.secondValue)){
     alert('Vazio ou inválidos');

     return;
    }
    console.log(operator);
    let result:number;
    
    if (operator === this.operators[0]){
      result = this.calcService.soma(Number(this.firstValue), Number(this.secondValue));
    } else if (operator === this.operators[1]){
      result = this.calcService.sub(Number(this.firstValue), Number(this.secondValue));
    } else if (operator === this.operators[2]){
      result = this.calcService.multi(Number(this.firstValue), Number(this.secondValue));
    } else if (operator === this.operators[3]){
      result = this.calcService.div(Number(this.firstValue), Number(this.secondValue));
    }

        alert('O resultado é: $[result]');
    
}
}
