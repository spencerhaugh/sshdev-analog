import { Component, Input } from "@angular/core";
import ProjectComponent from "../../components/project/project.component";
import { NgFor } from "@angular/common";
import { LoadResult } from "@analogjs/router";
import { load } from "./index.server";

interface ProjectObject {
  name: string;
  description: string;
  imgAsset: string;
  link: string;
  repoLink: string;
  body: string;
  technologies: string[];
}

@Component({
  standalone: true,
  imports: [
    ProjectComponent,
    NgFor
  ],
  template: `
    @for(project of projectData; track project) {
      <ssh-project-component
        [name]="project.name"
        [description]="project.description"
        [imgAsset]="project.imgAsset"
        [link]="project.link"
        [repoLink]="project.repoLink"
        [body]="project.body"
        [technologies]="project.technologies"
      ></ssh-project-component>
    }
  `
})

export default class IndexPage {
  public projectData!: ProjectObject[];
  @Input() load(data: LoadResult<typeof load>) {
    this.projectData = data;
  }
}
