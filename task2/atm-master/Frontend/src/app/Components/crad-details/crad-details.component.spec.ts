import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CradDetailsComponent } from './crad-details.component';

describe('CradDetailsComponent', () => {
  let component: CradDetailsComponent;
  let fixture: ComponentFixture<CradDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CradDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CradDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
