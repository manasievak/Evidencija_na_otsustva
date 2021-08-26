import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVraboteniComponent } from './list-vraboteni.component';

describe('ListVraboteniComponent', () => {
  let component: ListVraboteniComponent;
  let fixture: ComponentFixture<ListVraboteniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVraboteniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVraboteniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
