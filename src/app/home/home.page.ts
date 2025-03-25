import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  valorOriginal: number = 0;
  unidadeEntrada: string = 'km';
  unidadeSaida: string = 'milhas'
  valorConvertido: number = 0;

  constructor() { }

  converterUnidades() {
    this.valorOriginal = parseFloat(this.valorOriginal.toString());
    this.calcularConversao();
  }

  calcularConversao() {
    if (this.unidadeEntrada === 'km' && this.unidadeSaida === 'milhas') {
      this.valorConvertido = this.valorOriginal * 0.621371;
    } else if (this.unidadeEntrada === 'm' && this.unidadeSaida === 'pes') {
      this.valorConvertido = this.valorOriginal * 3.28084;
    } else if (this.unidadeEntrada === 'cm' && this.unidadeSaida === 'jardas') {
      this.valorConvertido = this.valorOriginal * 0.0109361;
    } else {
      this.valorConvertido = this.valorOriginal; // Se as unidades forem as mesmas
    }
  }
}
