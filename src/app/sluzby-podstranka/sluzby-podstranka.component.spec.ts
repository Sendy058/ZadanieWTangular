import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SluzbyPodstrankaComponent } from './sluzby-podstranka.component';

describe('SluzbyPodstrankaComponent', () => {
  let component: SluzbyPodstrankaComponent;
  let fixture: ComponentFixture<SluzbyPodstrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SluzbyPodstrankaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SluzbyPodstrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
