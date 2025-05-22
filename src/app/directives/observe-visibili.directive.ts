import {
  Directive,
  ElementRef,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[appObserveVisibility]',
})
export class ObserveVisibilityDirective implements OnInit, OnDestroy {
  @Output() visible = new EventEmitter<boolean>();
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Emitimos un booleano, que es lo que se espera
        this.visible.emit(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
