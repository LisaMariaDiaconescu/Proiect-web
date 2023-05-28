import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reteta3Component } from './reteta3.component';

describe('Reteta3Component', () => {
  let component: Reteta3Component;
  let fixture: ComponentFixture<Reteta3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reteta3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reteta3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
