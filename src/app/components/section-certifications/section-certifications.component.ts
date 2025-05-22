import { Component } from '@angular/core';
import { CardCertificationComponent } from '../card-certification/card-certification.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-certifications',
  standalone: true,
  imports: [CardCertificationComponent, CommonModule],
  templateUrl: './section-certifications.component.html',
  styleUrl: './section-certifications.component.css',
})
export class SectionCertificationsComponent {
  Projects = [
    {
      Name: 'Curso Cloud Computing',
      Academy: 'Academia Google Activate',
      pathimg: 'certificado1.png',
    },
    {
      Name: 'Curso Desarrollo Movíl',
      Academy: 'Academia Google Activate',
      pathimg: 'certificado2.png',
    },
    {
      Name: 'Curso Bootstrap 3',
      Academy: 'Academia DevCode',
      pathimg: 'certificado3.png',
    },
  ];
}
