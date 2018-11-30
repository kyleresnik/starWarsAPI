import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private _http: HttpClient) { }

  filmsFetch(searchValue: string) : Observable<any> {
    return this._http.get<any>(`https://swapi.co/api/films/?format=json&search=${searchValue}`)
  }
}
