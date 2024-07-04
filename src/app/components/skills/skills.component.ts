import {Component} from "@angular/core";
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
  public skillsList: SkillObject[] = [
    {
      icon: 'fa-js',
      name: 'Javascript',
    },
    {
      icon: 'fab fa-node-js',
      name: 'NodeJS',
    },
    {
      icon: 'fab fa-angular',
      name: 'Angular',
    },
    {
      icon: 'fa fa-database',
      name: 'SQL',
    },
    {
      icon: 'fab fa-node',
      name: 'Express',
    },
    {
      icon: 'fab fa-react',
      name: 'React & Next',
    },
    {
      icon: 'fab fa-python',
      name: 'Python'
    },
    {
      icon: 'fab fa-docker',
      name: 'Docker',
    },
    {
      icon: 'fab fa-git-alt',
      name: 'Git',
    },
    {
      icon: 'fab fa-css3-alt',
      name: 'CSS',
    },
    {
      icon: 'fab fa-html5',
      name: 'HTML',
    },
  ];
}
