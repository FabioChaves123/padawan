import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() { }

  public soma (valor, valor2) {
    return valor + valor2;
  };
  public sub (valor, valor2) {
    return valor - valor2;
  };
  public multi (valor, valor2) {
    return valor * valor2;
  };
  public div (valor, valor2) {
    return valor / valor2;
  };
}
