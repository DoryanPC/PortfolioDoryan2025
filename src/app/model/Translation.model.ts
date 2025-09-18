export interface Translation {
  NavBar: string[];
  Banner: string[];
  TitleExperiences: string[];
  Experiences: Experience[];
  TitleProject: string;
  Projects: Projects[];
  TitleCertification: string;
  Certifications: Certification[];
}

export interface Experience {
  title: string;
  Position: string;
  Description: string;
  Duration: string;
  ImgName: string;
  UrlWorkplace: string;
}

export interface Projects {
  title: string;
  client: string;
  descripcion: string;
  img: string;
  technologies: string[];
}

export interface Certification {
  Name: string;
  Academy: string;
  pathimg: string;
}
