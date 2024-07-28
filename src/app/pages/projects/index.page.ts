import { Component, Input } from "@angular/core";
import ProjectComponent from "../../components/project/project.component";
import { NgFor } from "@angular/common";
import { LoadResult } from "@analogjs/router";
import { load } from "./index.server";

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

@Component({
  standalone: true,
  imports: [
    ProjectComponent,
    NgFor
  ],
  template: `
    @for(project of load.projectData; track project) {
      <ssh-project-component
        [project]="project"
      ></ssh-project-component>
    }
  `
})

export default class IndexPage {
  public projectData!: ProjectObject[];
  @Input() load(data: LoadResult<typeof load>) {
    this.projectData = data.projectData;
  }
}
