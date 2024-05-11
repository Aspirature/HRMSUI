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

  getStates(country: any): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:7003/api/Master/getStateListByCountryIdAsync?countryId=' + country);
  }

  getDistricts(state: any): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:7003/api/Master/getDistrictListByStateIdAsync?stateId=' + state);
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
