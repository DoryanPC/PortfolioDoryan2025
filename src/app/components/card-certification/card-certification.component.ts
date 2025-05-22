import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-certification',
  standalone: true,
  imports: [],
  templateUrl: './card-certification.component.html',
  styleUrl: './card-certification.component.css',
})
export class CardCertificationComponent {
  @Input() Name!: string;
  @Input() academy!: string;
  @Input() Pathimg!: string;
}
