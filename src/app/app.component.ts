import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import NavbarComponent from "./components/navbar/navbar.component";
import { links } from "../refs";
import { NavbarLink } from "../models/nav.model";

@Component({
  selector: 'ssh-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <ssh-navbar-component class="navbar" [links]="links"></ssh-navbar-component>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      :host {
        width: 100vw;
        min-height: 100vh;
      }

      .navbar {
        display: flex;
        align-items: flex-start;
      }
    `,
  ],
})
export class AppComponent {
  protected readonly links: NavbarLink[] = links;
}
