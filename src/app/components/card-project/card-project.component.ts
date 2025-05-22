import {
  Component,
  Input,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.css',
})
export class CardProjectComponent {
  @Input() Name!: string;
  @Input() client!: string;
  @Input() Description!: string;
  @Input() Pathimg!: string;
  @Input() techs!: String[];

  isFoggy = true;

  constructor(private el: ElementRef) {}

  @ViewChild('imageElement') imageElement!: ElementRef;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isFoggy = false;
          observer.disconnect(); // Solo una vez
        }
      },
      {
        threshold: 0.1, // Se activa cuando al menos 10% del elemento es visible
      }
    );

    observer.observe(this.imageElement.nativeElement);
  }
}
