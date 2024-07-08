import {Component} from "@angular/core";
import ResumeButtonComponent from "../../components/resume-button/resume-button.component";
import {RESUME_LINK} from "../index.page";

@Component({
  standalone: true,
  selector: "ssh-contact",
  templateUrl: 'contact-page.html',
  styleUrl: './contact.page.scss',
  imports: [
    ResumeButtonComponent
  ]
})

export default class ContactPage {
  public resumeLink: string = RESUME_LINK;
}
