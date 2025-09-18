import { Component, inject } from '@angular/core';
import { CardCertificationComponent } from '../card-certification/card-certification.component';
import { CommonModule } from '@angular/common';
import { AppStore } from '../../store/traduction.store';

@Component({
  selector: 'app-section-certifications',
  standalone: true,
  imports: [CardCertificationComponent, CommonModule],
  templateUrl: './section-certifications.component.html',
  styleUrl: './section-certifications.component.css',
})
export class SectionCertificationsComponent {
  readonly appStore = inject(AppStore);

  itemsPorPagina: number = 3;
  paginaActual: number = 1;

  get items(): any[] {
    const allItems = this.appStore.Translation().Certifications;
    const startIndex = (this.paginaActual - 1) * this.itemsPorPagina;
    return allItems.slice(startIndex, startIndex + this.itemsPorPagina);
  }

  totalPaginas(): number {
    const total = this.appStore.Translation().Certifications.length;
    return Math.ceil(total / this.itemsPorPagina);
  }

  siguientePagina() {
    if (this.paginaActual < this.totalPaginas()) {
      this.paginaActual++;
    }
  }

  paginaAnterior() {
    if (this.paginaActual > 1) {
      this.paginaActual--;
    }
  }

  /*irAPagina(pagina: number) {
    if (pagina >= 1 && pagina <= this.totalPaginas()) {
      this.paginaActual = pagina;
    }*/
}
