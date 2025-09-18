import { Component, inject } from '@angular/core';
import { CardExperienceComponent } from '../card-experience/card-experience.component';
import { CommonModule } from '@angular/common';
import { AppStore } from '../../store/traduction.store';

@Component({
  selector: 'app-section-experiences',
  standalone: true,
  imports: [CommonModule, CardExperienceComponent],
  templateUrl: './section-experiences.component.html',
  styleUrl: './section-experiences.component.css',
})
export class SectionExperiencesComponent {
  readonly appStore = inject(AppStore);
}
