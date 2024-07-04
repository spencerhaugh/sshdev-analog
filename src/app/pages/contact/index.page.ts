import {Component} from "@angular/core";
import ResumeButtonComponent from "../../components/resume-button/resume-button.component";

@Component({
  standalone: true,
  selector: "ssh-contact",
  templateUrl: 'contact-page.html',
  styleUrl: './contact.page.scss',
  imports: [
    ResumeButtonComponent
  ]
})

export default class ContactPage {}
