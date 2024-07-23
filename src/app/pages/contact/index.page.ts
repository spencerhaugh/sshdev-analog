import { Component, Input } from "@angular/core";
import ResumeButtonComponent from "../../components/resume-button/resume-button.component";
import { RESUME_LINK } from "../index.page";
import { load } from './index.server';
import { LoadResult } from "@analogjs/router";
import { JsonPipe } from "@angular/common";

interface ContactObject {
  method: string,
  icon: string,
  link: string,
}

@Component({
  standalone: true,
  selector: "ssh-contact",
  templateUrl: 'contact-page.html',
  styleUrl: './contact.page.scss',
  imports: [
    ResumeButtonComponent,
    JsonPipe
  ]
})

export default class ContactPage {
  public resumeLink: string = RESUME_LINK;
  public contactInfo!: ContactObject[];

  @Input() load(data: LoadResult<typeof load>) {
    this.contactInfo = data.contactData[0];
  }
}
