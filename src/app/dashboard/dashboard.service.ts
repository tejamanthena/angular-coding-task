import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ChargingPoint } from './dashboard';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  dashboardUrl = 'cpm/dashboard';
  plugUrl = 'cpm/management/plug';
  unplugUrl = 'cpm/management/unplug';

  constructor(private http: HttpClient) {}

  getChargingPointsResponse(): Observable<ChargingPoint[]> {
    return this.http.get<ChargingPoint[]>(this.dashboardUrl);
  }

  plugChargingPoint(chargingPoint: ChargingPoint): Observable<void> {
    return this.http.put<void>(
      `${this.plugUrl}/${chargingPoint.id}`,
      chargingPoint
    );
  }

  unplugChargingPoint(chargingPoint: ChargingPoint): Observable<void> {
    return this.http.put<void>(
      `${this.unplugUrl}/${chargingPoint.id}`,
      chargingPoint
    );
  }
}
