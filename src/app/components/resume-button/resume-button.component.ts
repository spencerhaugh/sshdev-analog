import {Component, Input} from "@angular/core";

@Component({
  standalone: true,
  selector: 'ssh-resume-button',
  template: `
    <a class=“btn-download” href="{{ this.resumeLink }}" target="_blank" rel="noreferrer noopener">
        <button class="resume">Download Resume</button>
    </a>
  `,
  styleUrl: 'resume-button.component.scss',
})

export default class ResumeButtonComponent {
  @Input() resumeLink!: string;
}
