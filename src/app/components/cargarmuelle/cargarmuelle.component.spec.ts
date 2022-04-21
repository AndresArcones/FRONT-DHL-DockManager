import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarmuelleComponent } from './cargarmuelle.component';

describe('CargarmuelleComponent', () => {
  let component: CargarmuelleComponent;
  let fixture: ComponentFixture<CargarmuelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarmuelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarmuelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
