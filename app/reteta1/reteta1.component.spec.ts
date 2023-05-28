import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reteta1Component } from './reteta1.component';

describe('Reteta1Component', () => {
  let component: Reteta1Component;
  let fixture: ComponentFixture<Reteta1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reteta1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reteta1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
