import { Component, Input } from "@angular/core";
import { NgFor } from "@angular/common";

import { SkillObject } from "../../../models/about.model";

@Component({
  standalone: true,
  selector: 'ssh-skills',
  imports: [
    NgFor,
  ],
  templateUrl: './skills.component.html',
  styleUrls: ['skills.component.scss'],
})


export default class SkillsComponent {
  @Input() skillsList!: SkillObject[];
}
