import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerSigninComponent } from './volunteer-signin.component';

describe('VolunteerSigninComponent', () => {
  let component: VolunteerSigninComponent;
  let fixture: ComponentFixture<VolunteerSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerSigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
