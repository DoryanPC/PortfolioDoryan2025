export interface Translation {
  NavBar: string[];
  TitleExperiences: string[];
  Experiences: Experience[];
  TitleProject: string;
  Projects: Projects[];
  TitleCertification: string;
  Certification: Certification[];
}

export interface Experience {
  title: string;
  Position: string;
  Description: string;
  Duration: string;
}

export interface Projects {
  title: string;
  client: string;
  descripcion: string;
  technologies: string[];
}

export interface Certification {
  title: string;
  academy: string;
  img: string;
}
