import {Component, Input} from "@angular/core";
import { NgFor } from "@angular/common";

@Component({
  standalone: true,
  selector: 'ssh-project-component',
  templateUrl: 'project.component.html',
  styleUrls: ['project.component.css'],
  imports: [
    NgFor
  ],
})

export default class ProjectComponent {
  @Input() name!: string;
  @Input() description!: string;
  @Input() imgAsset!: string;
  @Input() link!: string;
  @Input() repoLink!: string;
  @Input() body!: string;
  @Input() technologies!: string[];
}
