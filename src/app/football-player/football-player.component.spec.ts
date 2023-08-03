import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballPlayerComponent } from './football-player.component';

describe('FootballPlayerComponent', () => {
  let component: FootballPlayerComponent;
  let fixture: ComponentFixture<FootballPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootballPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
