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
      });
    }
  }

  stopTimer() {
    this.isRunning = false;
    this.timerSubscription?.unsubscribe();
    this.timerSubscription = undefined;
    this.timeInSeconds = 0;
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  get timerColor(): string {
    return this.timeInSeconds >= 300 ? 'red' : 'black'; // Cambia a rojo después de 5 minutos
  }
}
