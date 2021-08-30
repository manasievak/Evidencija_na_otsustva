import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOtsustvaComponent } from './list-otsustva.component';

describe('ListOtsustvaComponent', () => {
  let component: ListOtsustvaComponent;
  let fixture: ComponentFixture<ListOtsustvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOtsustvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOtsustvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
