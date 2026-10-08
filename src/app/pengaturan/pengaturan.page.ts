import { Component } from '@angular/core';

@Component({
  selector: 'app-pengaturan',
  templateUrl: './pengaturan.page.html',
  styleUrls: ['./pengaturan.page.scss'],
  standalone: false
})
export class PengaturanPage {

  //untuk nyimpen status dark mode
  darkMode = false;

  constructor() {}

  //ini untuk toggle dark mode
  ubahDarkMode() {
    document.body.classList.toggle('dark', this.darkMode);
  }

}