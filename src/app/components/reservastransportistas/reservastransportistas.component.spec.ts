import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservastransportistasComponent } from './reservastransportistas.component';

describe('ReservastransportistasComponent', () => {
  let component: ReservastransportistasComponent;
  let fixture: ComponentFixture<ReservastransportistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservastransportistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservastransportistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
