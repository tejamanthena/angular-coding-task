import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { ChargingPoint } from './dashboard';

@Injectable({ 
    providedIn: "root"
})

export class DashboardService {
  dashboardUrl = 'cpm/dashboard'; 
  plugUrl = 'cpm/management/plug';
  unplugUrl = 'cpm/management/unplug';

  constructor(private http: HttpClient) { }


  getChargingPointsResponse(): Observable<ChargingPoint[]> {
    return this.http.get<ChargingPoint[]>(this.dashboardUrl);
  }

  plugChargingPoint(chargingPoint: ChargingPoint): Observable<void> {
    return this.http.put<void>(`${this.plugUrl}/${chargingPoint.id}`, 
    {
      id: chargingPoint.id,
      connectedTime: chargingPoint.connectedTime,
      power: chargingPoint.power,
      occupied: chargingPoint.occupied
    });
  }

  unplugChargingPoint(chargingPoint: ChargingPoint): Observable<void> {
    return this.http.put<void>(`${this.unplugUrl}/${chargingPoint.id}`, chargingPoint);
  }
}



