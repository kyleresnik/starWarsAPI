import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiDisplayComponent } from './swapi-display.component';

describe('SwapiDisplayComponent', () => {
  let component: SwapiDisplayComponent;
  let fixture: ComponentFixture<SwapiDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapiDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
