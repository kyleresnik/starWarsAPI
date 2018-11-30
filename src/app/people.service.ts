import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private _http: HttpClient) { }

  peopleFetch(searchValue: string) : Observable<any> {
    return this._http.get<any>(`https://swapi.co/api/people/?search=${searchValue}`)
  }
}
