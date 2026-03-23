import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponseModel } from '../models/interfaces/apiresponsemodel';
import { Observable } from 'rxjs';
import { IRole } from '../models/interfaces/role';
import { IDesignation } from '../models/interfaces/designations';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  getDesignations(): Observable<IDesignation[]> {
    return this.http.get<IDesignation[]>('http://localhost:3000/designations');
  }

  getRoles(): Observable<IRole[]> {
    return this.http.get<IRole[]>('http://localhost:3000/roles');
  }
}
