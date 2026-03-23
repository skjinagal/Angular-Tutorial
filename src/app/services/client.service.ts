import { Injectable } from '@angular/core';
import { ApiResponseModel } from '../models/interfaces/apiresponsemodel';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { 
  }
  
  postClient(clientData: Client)
  {
    return this.http.post<ApiResponseModel>('http://localhost:3000/clients', clientData);
  }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>('http://localhost:3000/clients');
  }

  deleteClient(clientId: number): Observable<ApiResponseModel> {
    return this.http.delete<ApiResponseModel>(`http://localhost:3000/clients/${clientId}`);
  }
}
