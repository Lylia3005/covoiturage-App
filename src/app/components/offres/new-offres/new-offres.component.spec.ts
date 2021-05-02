import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOffresComponent } from './new-offres.component';

describe('NewOffresComponent', () => {
  let component: NewOffresComponent;
  let fixture: ComponentFixture<NewOffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOffresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
