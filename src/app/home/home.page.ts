import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  valorOriginal = 0;
  unidadeEntrada = '';
  unidadeSaida = ''
  valorConvertido = 0;

  constructor() { }

  converterUnidades() {
    this.valorOriginal = parseInt(this.valorOriginal.toString());
    this.calcularConversao();
  }

  calcularConversao() {
    if (this.unidadeEntrada === 'km' && this.unidadeSaida === 'milhas') {
      this.valorConvertido = this.valorOriginal * 0.621371;
    } else if (this.unidadeEntrada === 'km' && this.unidadeSaida === 'pes') {
      this.valorConvertido = this.valorOriginal * 3280.84;
    } else if (this.unidadeEntrada === 'km' && this.unidadeSaida === 'jardas') {
      this.valorConvertido = this.valorOriginal * 1093.61;

    } else if (this.unidadeEntrada === 'm' && this.unidadeSaida === 'milhas') {
      this.valorConvertido = this.valorOriginal * 0.000621371;
    } else if (this.unidadeEntrada === 'm' && this.unidadeSaida === 'pes') {
      this.valorConvertido = this.valorOriginal * 3.28084; // Correção: usar this.valorOriginal
    } else if (this.unidadeEntrada === 'm' && this.unidadeSaida === 'jardas') {
      this.valorConvertido = this.valorOriginal * 1.09361;

    } else if (this.unidadeEntrada === 'cm' && this.unidadeSaida === 'milhas'){
      this.valorConvertido = this.valorOriginal * 0.00000621371;
    } else if (this.unidadeEntrada === 'cm' && this.unidadeSaida === 'pes') {
      this.valorConvertido = this.valorOriginal * 0.0328084;
    } else if (this.unidadeEntrada === 'cm' && this.unidadeSaida === 'jardas') {
      this.valorConvertido = this.valorOriginal * 0.0109361;
    } else if (this.unidadeEntrada === this.unidadeSaida && this.unidadeEntrada !== '') {
      this.valorConvertido = this.valorOriginal; // Se as unidades forem as mesmas
    }
  }
}
