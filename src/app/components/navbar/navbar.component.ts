import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NavbarLink } from "../../../models/nav.model";
import { NgClass } from "@angular/common";

@Component({
  standalone: true,
  selector: 'ssh-navbar-component',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [
    RouterLink,
    NgClass
  ]
})

export default class NavbarComponent {
  @Input() links!: NavbarLink[];
  public isActive: string = '/';

  public setIsActive(path: string) {
    this.isActive = path;
  }
}
