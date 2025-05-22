import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TraduccionService } from '../../service/traslation.service';
import { TraductionStore } from '../../store/traduction.store';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  @ViewChild('navbar') navbarRef!: ElementRef;

  LanguageSelected: string = 'EN';
  Languages = [
    { name: 'English', flag: 'assets/flag_usa.png' },
    { name: 'Spanish', flag: 'assets/flag_spain.png' },
  ];
  open = false;

  isScrolled: boolean = window.scrollY > 10;

  traducciones: any = {};

  constructor(
    private traductionservice: TraduccionService,
    private traductionstore: TraductionStore
  ) {
    this.traductionservice.traducciones$.subscribe((data) => {
      console.log(data);

      this.traducciones = data;
    });
  }

  ngAfterViewInit() {
    this.updateNavbarStyle();
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

    // Opcional: sombra solo al hacer scroll
    navbar.classList.toggle('shadow-lg', this.isScrolled);
  }

  selectedLanguage = 'English';
  selectedFlag = 'assets/flag_usa.png';

  selectLanguage(lang: any) {
    this.selectedLanguage = lang.name;
    this.selectedFlag = lang.flag;
    this.open = false;

    this.traductionstore.setIdioma(lang.name);
  }
}
