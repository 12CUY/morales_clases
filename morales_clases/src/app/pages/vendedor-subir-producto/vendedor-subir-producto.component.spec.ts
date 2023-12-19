import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorSubirProductoComponent } from './vendedor-subir-producto.component';

describe('VendedorSubirProductoComponent', () => {
  let component: VendedorSubirProductoComponent;
  let fixture: ComponentFixture<VendedorSubirProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendedorSubirProductoComponent]
    });
    fixture = TestBed.createComponent(VendedorSubirProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
