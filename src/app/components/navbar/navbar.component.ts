import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  private sub!: Subscription;
  isPortfolio: boolean = false;
  navItemBaseClasses: string = "px-2 px-md-1 bg-secondary bg-md-primary";
  navLinkBaseClasses: string = "bg-secondary bg-md-white text-dark px-3 px-md-2";
  navLinkHoverClasses: string = "bg-primary-hover bg-md-secondary-hover";
  navLinkActiveClasses: string = "border border-2 border-dark fw-bold";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.sub = this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.isPortfolio = e.url.startsWith("/Portfolio/");
      }
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
