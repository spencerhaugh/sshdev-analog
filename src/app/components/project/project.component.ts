import { Component, Input } from "@angular/core";
import {NgFor, NgIf} from "@angular/common";

import {ProjectObject} from "../../../models/project.model";

@Component({
  standalone: true,
  selector: 'ssh-project-component',
  templateUrl: 'project.component.html',
  styleUrls: ['project.component.scss'],
  imports: [
    NgFor,
    NgIf,
  ],
})

export default class ProjectComponent {
  @Input() project!: ProjectObject;
}
