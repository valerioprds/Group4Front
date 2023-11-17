import { Component } from '@angular/core';
import { GameData, PostApiResp } from '@app/_interfaces/interfaces';
import { ApiServiceService } from '@app/_services/api-service.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-click-toiled',
  templateUrl: './click-toiled.component.html',
  styleUrls: ['./click-toiled.component.css']
})
export class ClickToiledComponent {

  flushCount = 0;
  waterUsedPerFlush = 10; // Litros de agua por descarga

  constructor( public apiService: ApiServiceService,){

  }

  incrementCount(): void {
    this.flushCount++;
    this.onStopTimer() 
  }

  calculateWaterUsage(): number {
    return this.flushCount * this.waterUsedPerFlush;
  }

onStopTimer() {
    
  let gameData: GameData = this.apiService.createApiJsonObject("shower", 3);

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
