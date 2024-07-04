import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import NavbarComponent from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <ssh-navbar-component class="navbar"></ssh-navbar-component>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      :host {
        width: 100vw;
        height: 100vh;
      }

      .navbar {
        display: flex;
        align-items: flex-start;
      }
    `,
  ],
})
export class AppComponent {}
