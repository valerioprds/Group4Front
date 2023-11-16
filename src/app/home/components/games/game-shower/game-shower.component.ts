import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-game-shower',
  templateUrl: './game-shower.component.html',
  styleUrls: ['./game-shower.component.css']
})
export class GameShowerComponent implements OnDestroy {
  private timeInSeconds: number = 0;
  isRunning: boolean = false;
  private timerSubscription?: Subscription;
  waterUsed: number = 0; // Variable para almacenar los litros de agua gastados

  get time(): string {
    const minutes = Math.floor(this.timeInSeconds / 60);
    const seconds = this.timeInSeconds % 60;
    return `${minutes}m : ${seconds.toString().padStart(2, '0')}s`;
  }

  startTimer() {
    if (!this.isRunning) {
      this.isRunning = true;
      const timer = interval(1000);
      this.timerSubscription = timer.subscribe(() => {
        this.timeInSeconds++;
        this.updateWaterUsage();
      });
    }
  }

  stopTimer() {
    this.isRunning = false;
    this.timerSubscription?.unsubscribe();
    this.timerSubscription = undefined;
    // No reseteamos el agua usada aquí
    this.timeInSeconds = 0; // Resetea sólo el tiempo
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  get timerColor(): string {
    return this.timeInSeconds >= 300 ? 'red' : 'black'; // Cambia a rojo después de 5 minutos
  }

  private updateWaterUsage() {
    const rawWaterUsed = (this.timeInSeconds / 60) * 7.5;
    this.waterUsed = Number(rawWaterUsed.toFixed(2));  // Calcula el agua usada en litros
  }
}
