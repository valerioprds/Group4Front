import { Component } from '@angular/core';

@Component({
  selector: 'app-washing-machine',
  templateUrl: './washing-machine.component.html',
  styleUrls: ['./washing-machine.component.css'],
})
export class WashingMachineComponent {
  litros: number = 0;
  botonActivo: boolean = false;

  toggleBoton(): void {
    this.botonActivo = !this.botonActivo;
    if (this.botonActivo) {
      this.litros += 1;
    }
  }
}
