import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelSuperheroesComponent } from './marvel-superheroes.component';

describe('MarvelSuperheroesComponent', () => {
  let component: MarvelSuperheroesComponent;
  let fixture: ComponentFixture<MarvelSuperheroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelSuperheroesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarvelSuperheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
