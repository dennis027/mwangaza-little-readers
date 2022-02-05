import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LilianKabayaComponent } from './lilian-kabaya.component';

describe('LilianKabayaComponent', () => {
  let component: LilianKabayaComponent;
  let fixture: ComponentFixture<LilianKabayaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LilianKabayaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LilianKabayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
