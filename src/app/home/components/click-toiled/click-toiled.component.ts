import { Component } from '@angular/core';

@Component({
  selector: 'app-click-toiled',
  templateUrl: './click-toiled.component.html',
  styleUrls: ['./click-toiled.component.css']
})
export class ClickToiledComponent {

  flushCount = 0;
  waterUsedPerFlush = 10; // Litros de agua por descarga

  incrementCount(): void {
    this.flushCount++;
  }

  calculateWaterUsage(): number {
    return this.flushCount * this.waterUsedPerFlush;

  }

  onToiletClick() {
    let waterConsumption: number = this.calculateWaterUsage();
    let gameData: GameData = this.apiService.createApiJsonObject(2, waterConsumption);

    let apiResp: PostApiResp;
    this.apiService.sendGameData(gameData)
      .pipe(
        finalize(() => {
          console.log(apiResp)
          this.apiService.getUserData();
        }
        )
      )
      .subscribe((resp) => apiResp = resp);

    
  }


}
