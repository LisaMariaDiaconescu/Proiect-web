import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritieComponent } from './nutritie.component';

describe('NutritieComponent', () => {
  let component: NutritieComponent;
  let fixture: ComponentFixture<NutritieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutritieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutritieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
