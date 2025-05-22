import { Component, Input, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-card-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-experience.component.html',
  styleUrl: './card-experience.component.css',
  animations: [
    trigger('fadeInOnScroll', [
      state(
        'hidden',
        style({
          opacity: 0,
          transform: 'translateY(20px)',
        })
      ),
      state(
        'visible',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      transition('hidden => visible', animate('600ms ease-in')),
    ]),
  ],
})
export class CardExperienceComponent {
  @Input() Workplace!: string;
  @Input() Job!: string;
  @Input() Description!: string;
  @Input() Pathimg!: string;
  @Input() UrlWorkplace!: string;
  @Input() Duration!: string;

  isVisible = false;
  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const topShown = rect.top >= 0;
    const bottomShown = rect.bottom <= window.innerHeight;

    if (topShown && bottomShown) {
      this.isVisible = true;
    }
  }

  ngOnInit() {
    this.onScroll(); // inicializa visibilidad si ya está en pantalla
  }
}
