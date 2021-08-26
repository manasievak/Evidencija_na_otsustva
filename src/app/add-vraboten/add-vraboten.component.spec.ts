import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVrabotenComponent } from './add-vraboten.component';

describe('AddVrabotenComponent', () => {
  let component: AddVrabotenComponent;
  let fixture: ComponentFixture<AddVrabotenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVrabotenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVrabotenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
