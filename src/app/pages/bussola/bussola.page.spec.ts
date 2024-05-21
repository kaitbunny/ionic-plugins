import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BussolaPage } from './bussola.page';

describe('BussolaPage', () => {
  let component: BussolaPage;
  let fixture: ComponentFixture<BussolaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BussolaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
