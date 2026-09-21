import { Component } from '@angular/core';

@Component({
  selector: 'app-pengaturan',
  templateUrl: './pengaturan.page.html',
  styleUrls: ['./pengaturan.page.scss'],
  standalone: false
})
export class PengaturanPage {

  darkMode = true;

  constructor() {}

  ubahDarkMode() {
    document.body.classList.toggle('dark', this.darkMode);
  }

}