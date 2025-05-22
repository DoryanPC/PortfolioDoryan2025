import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraduccionService } from '../../service/traslation.service';
import { TraductionStore } from '../../store/traduction.store';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {
  mostrarIMG: boolean = false;
  mostrarLabel: boolean = false;

  textoNombreCompleto: string = "Hello!! I'm Doryan Pérez";
  textoNombreVisible: string = '';
  indexNombre: number = 0;

  textoRolCompleto: string = 'FullStack Developer';
  textoRolVisible: string = '';
  indexRol: number = 0;

  traducciones: any = {};

  @ViewChild('particlesContainer', { static: true }) containerRef!: ElementRef;
  private particleCount = 80;

  constructor(
    private traductionservice: TraduccionService,
    private traductionstore: TraductionStore,
    private renderer: Renderer2
  ) {
    this.traductionservice.traducciones$.subscribe((data) => {
      this.traducciones = data;
    });
  }

  async ngOnInit() {
    this.AnimateBanner();
    await this.digitarNombre();
    this.digitarRol();
    this.ShowDescription();
  }

  AnimateBanner() {
    for (let i = 0; i < this.particleCount; i++) {
      this.createParticle();
    }
  }

  private createParticle(): void {
    const particle = this.renderer.createElement('div');
    this.renderer.addClass(particle, 'particle');

    const size = Math.random() * 3 + 1;
    this.renderer.setStyle(particle, 'width', `${size}px`);
    this.renderer.setStyle(particle, 'height', `${size}px`);

    this.resetParticle(particle);
    this.renderer.appendChild(this.containerRef.nativeElement, particle);
    this.animateParticle(particle);
  }

  private resetParticle(particle: HTMLElement): { x: number; y: number } {
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;

    this.renderer.setStyle(particle, 'left', `${posX}%`);
    this.renderer.setStyle(particle, 'top', `${posY}%`);
    this.renderer.setStyle(particle, 'opacity', '0');

    return { x: posX, y: posY };
  }

  private animateParticle(particle: HTMLElement): void {
    const pos = this.resetParticle(particle);
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;

    setTimeout(() => {
      this.renderer.setStyle(particle, 'transition', `all ${duration}s linear`);
      this.renderer.setStyle(
        particle,
        'opacity',
        `${Math.random() * 0.3 + 0.1}`
      );

      const moveX = pos.x + (Math.random() * 20 - 10);
      const moveY = pos.y - Math.random() * 30;

      this.renderer.setStyle(particle, 'left', `${moveX}%`);
      this.renderer.setStyle(particle, 'top', `${moveY}%`);

      setTimeout(() => {
        this.animateParticle(particle);
      }, duration * 1000);
    }, delay * 1000);
  }

  digitarNombre(): Promise<void> {
    return new Promise((resolve) => {
      const escribir = () => {
        if (this.indexNombre < this.textoNombreCompleto.length) {
          this.textoNombreVisible +=
            this.textoNombreCompleto[this.indexNombre++];
          setTimeout(escribir, 50); // velocidad de escritura
        } else {
          resolve(); // Termina la promesa
        }
      };
      escribir();
    });
  }

  digitarRol() {
    if (this.indexRol < this.textoRolCompleto.length) {
      this.textoRolVisible += this.textoRolCompleto[this.indexRol++];
      setTimeout(() => this.digitarRol(), 100);
    }
  }

  ShowDescription() {
    setTimeout(() => {
      this.mostrarLabel = true;
    }, 4000); // Ajusta el delay según lo que desees
  }

  cambiarIdioma(idioma: 'en' | 'es') {
    this.traductionstore.setIdioma(idioma);
  }
}
