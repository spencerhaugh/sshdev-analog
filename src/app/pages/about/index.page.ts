import { Component, Input } from "@angular/core";
import SkillsComponent from "../../components/skills/skills.component";
import { LoadResult } from "@analogjs/router";
import { load } from "./index.server";
import { JsonPipe} from "@angular/common";

interface aboutObject {
  title: string;
  content: string;
}

@Component({
  standalone: true,
  selector: 'ssh-about',
  templateUrl: 'about-page.html',
  styleUrl: 'about-page.scss',
  imports: [
    SkillsComponent,
    JsonPipe
  ]
})

export default class AboutPage {
  @Input() aboutInfo!: aboutObject[];

  @Input() load(data: LoadResult<typeof load>) {
    this.aboutInfo = data;
  }
}
