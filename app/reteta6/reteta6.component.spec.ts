import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reteta6Component } from './reteta6.component';

describe('Reteta6Component', () => {
  let component: Reteta6Component;
  let fixture: ComponentFixture<Reteta6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reteta6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reteta6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
