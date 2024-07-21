import {Component} from "@angular/core";
import { toSignal } from '@angular/core/rxjs-interop';
import ResumeButtonComponent from "../../components/resume-button/resume-button.component";
import {RESUME_LINK} from "../index.page";
import { load } from './index.server';
import {injectLoad} from "@analogjs/router";
import {JsonPipe} from "@angular/common";

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
  data = toSignal(injectLoad<typeof load>(), { requireSync: true });
}
