import {Component} from "@angular/core";
import SkillsComponent from "../../components/skills/skills.component";

@Component({
  standalone: true,
  selector: 'ssh-about',
  templateUrl: 'about-page.html',
  styleUrl: 'about-page.scss',
  imports: [
    SkillsComponent,
  ]
})

export default class AboutPage {}
