import { Component } from '@angular/core';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrl: './calculo.component.css'
})
export class CalculoComponent {

  weight: number = 0;
  height: number = 0;
  result: number = 0;
  interpretation!: string;

  calculateIMC(): void {
    if (this.weight && this.height) {
      this.result = this.weight / (this.height * this.height);
      this.interpretation = this.getInterpretation(this.result);
    }
  }

  getInterpretation(imc: number): string {
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc < 25) {
      return "Peso normal";
    } else if (imc < 30) {
      return "Sobrepeso";
    } else {
      return "Obesidade";
    }
  }
}
