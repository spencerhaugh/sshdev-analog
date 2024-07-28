import { Component, Input } from "@angular/core";
import ResumeButtonComponent from "../../components/resume-button/resume-button.component";
import { load } from './index.server';
import { LoadResult } from "@analogjs/router";
import { JsonPipe } from "@angular/common";
import { RESUME_LINK } from "../../../refs";

export interface ContactObject {
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
  public contactData!: ContactObject[];

  @Input() load(data: LoadResult<typeof load>) {
    this.contactData = data.contactData;
  }
}
