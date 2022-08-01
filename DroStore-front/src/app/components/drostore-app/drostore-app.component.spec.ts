import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrostoreAppComponent } from './drostore-app.component';

describe('DrostoreAppComponent', () => {
  let component: DrostoreAppComponent;
  let fixture: ComponentFixture<DrostoreAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrostoreAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrostoreAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
