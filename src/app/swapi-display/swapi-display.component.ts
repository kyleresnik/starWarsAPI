import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FilmsService } from '../films.service';
import { PeopleService } from '../people.service';
import { ShipsService } from '../ships.service';

@Component({
  selector: 'app-swapi-display',
  templateUrl: './swapi-display.component.html',
  styleUrls: ['./swapi-display.component.scss']
})
export class SwapiDisplayComponent implements OnInit {

  displayForm: FormGroup;
  public _result: any[];

  searchValue = [
    { view: 'Films', value: 'films'},
    { view: 'Ships', value: 'starships' }, 
    { view: 'People', value: 'people' }
  ]

  constructor(
    private formBuilder: FormBuilder,
    private filmsService: FilmsService,
    private peopleService: PeopleService,
    private shipsService: ShipsService
  ) { }

  ngOnInit() {
    this.displayForm = this.formBuilder.group({
      searchMenu: new FormControl(),
      searchValue: new FormControl()
    })
  }

  submitSearch(): void {
    if (this.displayForm.controls['searchMenu'].value === 'films') {
      this.filmsService.filmsFetch(this.displayForm.controls['searchValue'].value)
      .subscribe((res: any) => {this._result = res})
    } else if (this.displayForm.controls['searchMenu'].value === 'starships') {
      this.shipsService.shipsFetch(this.displayForm.controls['searchValue'].value)
      .subscribe((res: any) => {this._result = res})
    } else if (this.displayForm.controls['searchMenu'].value === 'people') {
      this.peopleService.peopleFetch(this.displayForm.controls['searchValue'].value)
      .subscribe((res: any) => {this._result = res})
    } else {
      console.log('Error fetching request')
    }
  }

}
