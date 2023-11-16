import { Component } from '@angular/core';

@Component({
  selector: 'app-status-progress-bar',
  templateUrl: './status-progress-bar.component.html',
  styleUrls: ['./status-progress-bar.component.css']
})
export class StatusProgressBarComponent {
  maxValue = 10;  // Valor máximo es 10
  statusBar = 5;  // Nuevo valor que reemplaza a currentValue


  get statusBarString() {
    return ((this.statusBar / this.maxValue) * 100).toFixed(0) + '%';
  }

  get progressWidth() {
    return (this.statusBar / this.maxValue) * 100 + '%';
  }
}
