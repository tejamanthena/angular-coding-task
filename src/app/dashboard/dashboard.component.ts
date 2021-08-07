import { Component, OnInit } from '@angular/core';

import { ChargingPoint } from './dashboard';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [DashboardService],
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  chargingPoints: ChargingPoint[] = [];
  plugIn: ChargingPoint | undefined;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.getChargingPoints();
  }

  getChargingPoints(): void {
    this.dashboardService.getChargingPointsResponse().subscribe(
      (chargingPoints) => (this.chargingPoints = chargingPoints),
      (error) => console.log(error)
    );
  }

  plugChargingPoint(chargingPoint: ChargingPoint) {
    this.plugIn = chargingPoint;
    if (this.plugIn) {
      this.dashboardService
        .plugChargingPoint(this.plugIn)
        .subscribe((cp: any) => {
          const ix = cp
            ? this.chargingPoints.findIndex((h) => h.id === cp.id)
            : -1;
          if (ix > -1) {
            this.chargingPoints[ix] = cp;
          }
          this.getChargingPoints();
        });
      this.plugIn = undefined;
      
    }
    
  }

  unplugChargingPoint(chargingPoint: ChargingPoint) {
    this.plugIn = chargingPoint;
    if (this.plugIn) {
      this.dashboardService
        .unplugChargingPoint(this.plugIn)
        .subscribe((cp: any) => {
          const ix = cp
            ? this.chargingPoints.findIndex((h) => h.id === cp.id)
            : -1;
          if (ix > -1) {
            this.chargingPoints[ix] = cp;
          }
          this.getChargingPoints();
        });

      this.plugIn = undefined;
      
    }
    
  }
}
