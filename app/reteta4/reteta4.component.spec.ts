import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reteta4Component } from './reteta4.component';

describe('Reteta4Component', () => {
  let component: Reteta4Component;
  let fixture: ComponentFixture<Reteta4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reteta4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reteta4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
