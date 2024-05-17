import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LocationsService {

  constructor(private http: HttpClient) {}

  getCountries(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:7003/api/Master/getCountryListAsync');
  }

  getStates(countryId: any): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:7003/api/Master/getStateListByCountryIdAsync?countryId=' + countryId);
  }

  getDistricts(stateId: any): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:7003/api/Master/getDistrictListByStateIdAsync?stateId=' + stateId);
  }

  getRoles(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:7003/api/Master/getRoleListAsync');
  }

  getDepartment(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:7003/api/Master/getMasterDepartmentsAsync');
  }

  getDesignation(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:7003/api/Master/getMasterDesignationsAsync');
  }


}
