import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOddelComponent } from './add-oddel.component';

describe('AddOddelComponent', () => {
  let component: AddOddelComponent;
  let fixture: ComponentFixture<AddOddelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOddelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOddelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
