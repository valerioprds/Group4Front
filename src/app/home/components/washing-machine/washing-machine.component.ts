import { Component } from '@angular/core';
import { GameData, PostApiResp } from '@app/_interfaces/interfaces';
import { ApiServiceService } from '@app/_services/api-service.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-washing-machine',
  templateUrl: './washing-machine.component.html',
  styleUrls: ['./washing-machine.component.css'],
})
export class WashingMachineComponent {
  litros: number = 0;
  botonActivo: boolean = false;

  constructor(public apiService: ApiServiceService,){

  }

  toggleBoton(): void {
    this.botonActivo = !this.botonActivo;
    if (this.botonActivo) {
      this.litros += 1;
  this.onStopTimer();
    }
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
