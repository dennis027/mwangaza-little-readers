import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WangariKabayaComponent } from './wangari-kabaya.component';

describe('WangariKabayaComponent', () => {
  let component: WangariKabayaComponent;
  let fixture: ComponentFixture<WangariKabayaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WangariKabayaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WangariKabayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
