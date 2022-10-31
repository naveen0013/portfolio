import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainhereComponent } from './mainhere.component';

describe('MainhereComponent', () => {
  let component: MainhereComponent;
  let fixture: ComponentFixture<MainhereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainhereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
