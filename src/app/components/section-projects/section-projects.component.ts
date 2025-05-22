import { Component, ElementRef, ViewChild } from '@angular/core';
import { CardProjectComponent } from '../card-project/card-project.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-projects',
  standalone: true,
  imports: [CardProjectComponent, CommonModule],
  templateUrl: './section-projects.component.html',
  styleUrl: './section-projects.component.css',
})
export class SectionProjectsComponent {
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  Projects = [
    {
      Name: 'Official WebSite Censo 2024',
      client: 'Banco Central de Reserva de El Salvador',
      Description:
        'Official Website for National Censo of Poblation and vivienda',
      techs: ['PHP', 'Bootstrap', 'CSS', 'HTML', 'JS'],
      pathimg: 'directoriomingob.png',
    },
    {
      Name: ' Fuerza Laboral - RRHH System ',
      client: 'Ministry of health of El Salvador',
      Description: 'System for human resource management in the institution',
      techs: ['PHP', 'Bootstrap', 'CSS', 'HTML', 'JS'],
      pathimg: 'geoportal.png',
    },
    {
      Name: ' Telephone directory ',
      client: 'Ministry of Goverment of El Salvador',
      Description: 'System for human resource management in the institution',
      techs: ['PHP', 'Bootstrap', 'CSS', 'HTML', 'JS'],
      pathimg: 'websiteatle.png',
    },
  ];

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
}
