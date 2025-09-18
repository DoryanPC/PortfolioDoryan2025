import {
  Component,
  HostListener,
  ElementRef,
  ViewChild,
  inject,
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppStore } from '../../store/traduction.store';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  @ViewChild('navbar') navbarRef!: ElementRef;

  LanguageSelected: object = {
    name: 'English',
    shortname: 'EN',
    flag: 'assets/flag_usa.png',
  };

  Languages = [
    { name: 'English', shortname: 'EN', flag: 'assets/flag_usa.png' },
    { name: 'Spanish', shortname: 'ES', flag: 'assets/flag_spain.png' },
  ];

  open = false;
  isScrolled: boolean = window.scrollY > 10;
  traducciones: any = {};

  readonly appStore = inject(AppStore);

  ngAfterViewInit() {
    this.updateNavbarStyle();
  }

  selectLanguage(ShortLang: any) {
    this.LanguageSelected = ShortLang;
    this.appStore.changeLanguage(ShortLang.shortname);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateNavbarStyle();
  }

  private updateNavbarStyle() {
    const navbar = this.navbarRef.nativeElement as HTMLElement;
    this.isScrolled = window.scrollY > 10;

    navbar.classList.toggle('bg-transparent', !this.isScrolled);
    navbar.classList.toggle('bg-navbar', this.isScrolled);
    navbar.classList.toggle('shadow-lg', this.isScrolled);
  }

  selectedLanguage = 'English';
  selectedFlag = 'assets/flag_usa.png';
}
