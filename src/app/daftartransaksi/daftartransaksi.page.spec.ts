import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DaftarTransaksiPage } from './daftartransaksi.page';

describe('DaftartransaksiPage', () => {
  let component: DaftarTransaksiPage;
  let fixture: ComponentFixture<DaftarTransaksiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarTransaksiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
