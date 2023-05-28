import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reteta5Component } from './reteta5.component';

describe('Reteta5Component', () => {
  let component: Reteta5Component;
  let fixture: ComponentFixture<Reteta5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reteta5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reteta5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
