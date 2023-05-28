import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DouaComponent } from './doua.component';

describe('DouaComponent', () => {
  let component: DouaComponent;
  let fixture: ComponentFixture<DouaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DouaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DouaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
