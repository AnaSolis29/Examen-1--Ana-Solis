import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarloginComponent } from './verificarlogin.component';

describe('VerificarloginComponent', () => {
  let component: VerificarloginComponent;
  let fixture: ComponentFixture<VerificarloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificarloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
