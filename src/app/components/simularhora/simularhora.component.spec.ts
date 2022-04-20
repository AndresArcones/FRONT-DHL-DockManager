import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimularhoraComponent } from './simularhora.component';

describe('SimularhoraComponent', () => {
  let component: SimularhoraComponent;
  let fixture: ComponentFixture<SimularhoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimularhoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimularhoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
