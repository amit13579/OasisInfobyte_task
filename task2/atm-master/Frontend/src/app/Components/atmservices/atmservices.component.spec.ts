import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmservicesComponent } from './atmservices.component';

describe('AtmservicesComponent', () => {
  let component: AtmservicesComponent;
  let fixture: ComponentFixture<AtmservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmservicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtmservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
