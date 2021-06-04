import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

 private linkTheme = document.getElementById('tema');
 public links: NodeListOf<Element>

  constructor() {

    const path = localStorage.getItem('tema') || 'assets/css/colors/default-dark.css';

    this.linkTheme.setAttribute('href', path);
  }

  changeColor(tema: string) {

    const path = `assets/css/colors/${tema}.css`;

    this.linkTheme.setAttribute('href', path);

    localStorage.setItem('tema', path);

    this.colocarCheck();

  }

  colocarCheck() {

    const links = document.querySelectorAll('.selector');

    links.forEach( element => {
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl = `assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme.getAttribute('href');

      if ( btnThemeUrl === currentTheme ) {
             element.classList.add('working');
      }

    });

   }

}
