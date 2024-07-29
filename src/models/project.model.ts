export interface ProjectObject {
  name: string;
  description: string;
  imgAsset: string;
  versions: ProjectVersion[];
  body: string;
  technologies: string[];
}

export interface ProjectVersion {
  language: string;
  link: string;
  repoLink: string;
}
