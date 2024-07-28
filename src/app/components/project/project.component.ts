import { Component, Input } from "@angular/core";
import { NgFor } from "@angular/common";
import { ProjectObject } from "../../pages/projects/index.page";

@Component({
  standalone: true,
  selector: 'ssh-project-component',
  templateUrl: 'project.component.html',
  styleUrls: ['project.component.css'],
  imports: [
    NgFor,
  ],
})

export default class ProjectComponent {
  @Input() project!: ProjectObject;
}
