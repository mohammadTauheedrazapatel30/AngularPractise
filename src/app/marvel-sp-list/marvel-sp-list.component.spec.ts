import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelSpListComponent } from './marvel-sp-list.component';

describe('MarvelSpListComponent', () => {
  let component: MarvelSpListComponent;
  let fixture: ComponentFixture<MarvelSpListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelSpListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarvelSpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
