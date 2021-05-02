import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOffresComponent } from './edit-offres.component';

describe('EditOffresComponent', () => {
  let component: EditOffresComponent;
  let fixture: ComponentFixture<EditOffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOffresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
