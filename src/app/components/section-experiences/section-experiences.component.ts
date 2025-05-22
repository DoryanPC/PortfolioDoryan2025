import { Component } from '@angular/core';
import { CardExperienceComponent } from '../card-experience/card-experience.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-experiences',
  standalone: true,
  imports: [CommonModule, CardExperienceComponent],
  templateUrl: './section-experiences.component.html',
  styleUrl: './section-experiences.component.css',
})
export class SectionExperiencesComponent {
  Experiences = [
    {
      workplace: "El Salvador's Central Bank of reserve",
      UrlWorkplace: 'https://www.bcr.gob.sv',
      workplaceEsp: 'Banco Central de Reserva de El Salvador',
      job: 'Manager of Systems IT',
      jobEsp: 'Administrador de Sistemas de IT',
      Description:
        'Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.',
      duration: 'From January 2024 to current',
      durationEsp: 'Desde Enero 2024 a hoy',
      Pathimg: 'logo_bcr_blanco.png',
      visible: true,
    },
    {
      workplace: 'Ministry Health of El Salvador',
      UrlWorkplace: 'https://www.bcr.gob.sv',
      workplaceEsp: 'Ministerio de Salud de El Salvador',
      job: 'Software Developer',
      jobEsp: 'Desarrollador de Software',
      Description:
        'Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.',
      duration: 'From January 2023 to January 2024',
      durationEsp: 'Desde Enero 2023 to January 2024',
      Pathimg: 'logo_blanco_misal.png',
      visible: true,
    },
    {
      workplace: 'Intersys S.A de C.V',
      UrlWorkplace: 'https://www.bcr.gob.sv',
      workplaceEsp: 'Intersys S.A de C.V',
      job: 'Software Developer',
      jobEsp: 'Desarrollador de Software',
      Description:
        'Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.',
      duration: 'From Juny 2019 to January 2023',
      durationEsp: 'Desde Enero 2023 to January 2024',
      Pathimg: 'logo_blanco_intersys.png',
      visible: true,
    },
  ];
}
