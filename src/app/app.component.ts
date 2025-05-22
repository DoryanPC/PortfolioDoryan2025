import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BannerComponent } from './components/banner/banner.component';
import { SectionExperiencesComponent } from './components/section-experiences/section-experiences.component';
import { SectionProjectsComponent } from './components/section-projects/section-projects.component';
import { SectionCertificationsComponent } from './components/section-certifications/section-certifications.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    BannerComponent,
    SectionExperiencesComponent,
    SectionProjectsComponent,
    SectionCertificationsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PortafolioDoryan';
}
