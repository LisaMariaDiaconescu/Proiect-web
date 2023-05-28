import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reteta2Component } from './reteta2.component';

describe('Reteta2Component', () => {
  let component: Reteta2Component;
  let fixture: ComponentFixture<Reteta2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reteta2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reteta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
