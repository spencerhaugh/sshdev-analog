import {Component, Input} from "@angular/core";
import {NgFor} from "@angular/common";

interface SkillObject {
  icon: string;
  name: string;
}

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
