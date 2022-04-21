import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosdiaComponent } from './pedidosdia.component';

describe('PedidosdiaComponent', () => {
  let component: PedidosdiaComponent;
  let fixture: ComponentFixture<PedidosdiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosdiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosdiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
