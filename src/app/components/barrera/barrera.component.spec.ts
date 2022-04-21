import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreraComponent } from './barrera.component';

describe('BarreraComponent', () => {
  let component: BarreraComponent;
  let fixture: ComponentFixture<BarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarreraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
