import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordFilledComponent } from './change-password-filled.component';

describe('ChangePasswordFilledComponent', () => {
  let component: ChangePasswordFilledComponent;
  let fixture: ComponentFixture<ChangePasswordFilledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordFilledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordFilledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
