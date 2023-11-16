import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-water-progress-bar',
  templateUrl: './water-progress-bar.component.html',
  styleUrls: ['./water-progress-bar.component.css']
})
export class WaterProgressBarComponent implements OnInit {

  waterPercentage: string = '50%';

  ngOnInit(): void {
    this.setWaterPercentageValue();
  }

  setWaterPercentageValue() {

    let totalLiterAverage: number = 6;
    let totalLiterUsed: number = 1;


    let percentage = Math.round(((totalLiterUsed * 100) / totalLiterAverage))

    this.waterPercentage = `${percentage}%`;
  }
}
