import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleDataService {
  public ApiUrl ="http://localhost:3000/users";
  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get<any>(this.ApiUrl);
  }
}
