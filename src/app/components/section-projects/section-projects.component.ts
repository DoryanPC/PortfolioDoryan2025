import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { CardProjectComponent } from '../card-project/card-project.component';
import { CommonModule } from '@angular/common';
import { AppStore } from '../../store/traduction.store';

@Component({
  selector: 'app-section-projects',
  standalone: true,
  imports: [CardProjectComponent, CommonModule],
  templateUrl: './section-projects.component.html',
  styleUrl: './section-projects.component.css',
})
export class SectionProjectsComponent {
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
  readonly appStore = inject(AppStore);

  itemsPorPagina: number = 3;
  paginaActual: number = 1;
  Desofuscado: Boolean = false;

  get items(): any[] {
    const allItems = this.appStore.Translation().Projects;
    const startIndex = (this.paginaActual - 1) * this.itemsPorPagina;
    return allItems.slice(startIndex, startIndex + this.itemsPorPagina);
  }

  totalPaginas(): number {
    const total: number = this.appStore.Translation().Projects.length;
    return Math.ceil(total / this.itemsPorPagina);
  }

  esUltimaPagina(): boolean {
    return this.paginaActual === this.totalPaginas();
  }

  siguientePagina() {
    if (!this.esUltimaPagina()) {
      this.paginaActual++;
    }
  }

  paginaAnterior() {
    if (this.paginaActual > 1) {
      this.paginaActual--;
    }
  }

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  }

  GoProject() {
    console.log('cambios');
  }
}
