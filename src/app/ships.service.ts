import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  constructor(private _http: HttpClient) { }

  shipsFetch(searchValue: string) : Observable<any> {
    return this._http.get<any>(`https://swapi.co/api/starships/?search=${searchValue}`)
  }
}
