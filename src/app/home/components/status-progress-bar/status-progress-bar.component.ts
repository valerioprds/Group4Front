import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '@app/_services/api-service.service';

@Component({
  selector: 'app-status-progress-bar',
  templateUrl: './status-progress-bar.component.html',
  styleUrls: ['./status-progress-bar.component.css']
})

export class StatusProgressBarComponent implements OnInit {
  maxValue = 10;  // Valor máximo ahora es 10
  statusBar = 5;  // Nuevo valor que reemplaza a currentValue


  get statusBarString() {
    return ((this.statusBar / this.maxValue) * 100).toFixed(0) + '%';
  }

  constructor(
    private apiService: ApiServiceService,
  ) {

  }
  ngOnInit(): void {
    this.setBarValues()
  }

  get progressWidth() {
    return (this.statusBar / this.maxValue) * 100 + '%';
  }

  setBarValues() {
    this.apiService.userTotalWaterUsage
    .subscribe( (resp) => {
      this.statusBar = resp
      this.statusBarString = `${this.statusBar}%` })
  }
}
