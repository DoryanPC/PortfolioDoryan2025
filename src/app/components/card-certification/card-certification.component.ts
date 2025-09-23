import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-certification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-certification.component.html',
  styleUrl: './card-certification.component.css',
})
export class CardCertificationComponent {
  @Input() Name!: string;
  @Input() academy!: string;
  @Input() Pathimg!: string;

  imageLoaded: boolean = false;
}
