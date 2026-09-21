import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewprodukPage } from './newproduk.page';

describe('NewprodukPage', () => {
  let component: NewprodukPage;
  let fixture: ComponentFixture<NewprodukPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewprodukPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
