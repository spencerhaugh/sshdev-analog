import { Component } from '@angular/core';
import HeroComponent from "../components/hero/hero.component";
import ResumeButtonComponent from "../components/resume-button/resume-button.component";

@Component({
  selector: 'ssh-home',
  standalone: true,
  template: `
    <ssh-hero></ssh-hero>
    <h2 class="home-title">// Software Engineer</h2>
    <h3 class="home-subtitle">// Let's get radical</h3>
    <ssh-resume-button resumeLink="{{ this.resumeLink }}"></ssh-resume-button>
  `,
  imports: [
    HeroComponent,
    ResumeButtonComponent
  ]
})
export default class HomeComponent {
  public resumeLink: string = "https://drive.google.com/file/d/1-AifT8L92THPadpXjZqazPAygQGKalEu/view?usp=sharing"
}
