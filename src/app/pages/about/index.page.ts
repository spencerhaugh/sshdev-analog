import { Component, Input } from "@angular/core";
import SkillsComponent from "../../components/skills/skills.component";
import { LoadResult } from "@analogjs/router";
import { load } from "./index.server";

interface AboutObject {
  title: string;
  content: string[];
}

@Component({
  standalone: true,
  selector: 'ssh-about',
  templateUrl: 'about-page.html',
  styleUrl: 'about-page.scss',
  imports: [
    SkillsComponent,
  ]
})

export default class AboutPage {
  @Input() load(data: LoadResult<typeof load>) {}
}
