import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOtsustvoComponent } from './add-otsustvo.component';

describe('AddOtsustvoComponent', () => {
  let component: AddOtsustvoComponent;
  let fixture: ComponentFixture<AddOtsustvoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOtsustvoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOtsustvoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
