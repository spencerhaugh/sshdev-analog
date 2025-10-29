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
  constructor() {
    this.logToDevTools();
  }
  protected readonly links: NavbarLink[] = links;

  logToDevTools = () => {
    console.log(
      `
      **************************************************************
      %c
          ███████╗██████╗ ███████╗███╗   ██╗ ██████╗███████╗██████╗
          ██╔════╝██╔══██╗██╔════╝████╗  ██║██╔════╝██╔════╝██╔══██╗
          ███████╗██████╔╝█████╗  ██╔██╗ ██║██║     █████╗  ██████╔╝
          ╚════██║██╔═══╝ ██╔══╝  ██║╚██╗██║██║     ██╔══╝  ██╔══██╗
          ███████║██║     ███████╗██║ ╚████║╚██████╗███████╗██║  ██║
          ╚══════╝╚═╝     ╚══════╝╚═╝  ╚═══╝ ╚═════╝╚══════╝╚═╝  ╚═╝

          %c
          ██╗  ██╗ █████╗ ██╗   ██╗ ██████╗ ██╗  ██╗
          ██║  ██║██╔══██╗██║   ██║██╔════╝ ██║  ██║
          ███████║███████║██║   ██║██║  ███╗███████║
          ██╔══██║██╔══██║██║   ██║██║   ██║██╔══██║
          ██║  ██║██║  ██║╚██████╔╝╚██████╔╝██║  ██║
          ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝

          %c
          ██████╗  ██████╗ ████████╗
          ██╔══██╗██╔═══██╗╚══██╔══╝
          ██║  ██║██║   ██║   ██║
          ██║  ██║██║   ██║   ██║
          ██████╔╝╚██████╔╝   ██║
          ╚═════╝  ╚═════╝    ╚═╝

          %c
          ██████╗ ███████╗██╗   ██╗
          ██╔══██╗██╔════╝██║   ██║
          ██║  ██║█████╗  ██║   ██║
          ██║  ██║██╔══╝  ╚██╗ ██╔╝
          ██████╔╝███████╗ ╚████╔╝
          ╚═════╝ ╚══════╝  ╚═══╝

        %c%c`,
      `color: darkorange; font: 400 1em monospace;`,
      `color: orange; font: 400 1em monospace;`,
      `color: #f5af19; font: 400 1em monospace;`,
      `color: #ffd505; font: 400 1em monospace;`,
      "background-color: #d2ff00; color: black; font: 400 1em monospace; padding: 0.5em 0; font-weight: bold;",
      "",
      `Welcome to the site, please email your job offers to: spencer dot haugh at gmail dot com

      **************************************************************
      `
    );
  }
}
