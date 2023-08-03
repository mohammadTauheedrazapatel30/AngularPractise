import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballPlListComponent } from './football-pl-list.component';

describe('FootballPlListComponent', () => {
  let component: FootballPlListComponent;
  let fixture: ComponentFixture<FootballPlListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballPlListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootballPlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
