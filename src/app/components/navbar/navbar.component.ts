import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  navLinkBaseClasses: string = "bg-white text-dark me-2";
  navLinkHoverClasses: string = "bg-secondary-hover";
  navLinkActiveClasses: string = "border border-2 border-dark fw-bold";

  constructor() { }
}
