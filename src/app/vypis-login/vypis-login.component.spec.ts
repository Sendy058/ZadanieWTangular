import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VypisLoginComponent } from './vypis-login.component';

describe('VypisLoginComponent', () => {
  let component: VypisLoginComponent;
  let fixture: ComponentFixture<VypisLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VypisLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VypisLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
