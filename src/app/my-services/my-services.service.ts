import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataModel } from './my-services';

@Injectable({
  providedIn: 'root',
})
export class MyServicesService {
  constructor(private http: HttpClient) {}

  loadListData(): Observable<DataModel> {
    return this.http.get<DataModel>('assets/json/Services.json');
  }
}
