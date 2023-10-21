import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {


    private urlApi = 'http://localhost:3300/alumno' //puerto 3300 esta sobre node js
      constructor(private http: HttpClient) { }

      public getData(): Observable<any> {
        return this.http.get<any>(this.urlApi);


      }
}
