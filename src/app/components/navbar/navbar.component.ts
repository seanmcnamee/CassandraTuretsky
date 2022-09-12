import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, UrlSegment } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private sub!: Subscription;
  isPortfolio: boolean = false;
  navItemBaseClasses: string = "px-2 px-lg-1 bg-white bg-lg-primary";
  navLinkBaseClasses: string = "bg-white text-dark px-3 px-lg-2";
  navLinkHoverClasses: string = "bg-secondary-hover";
  navLinkActiveClasses: string = "border border-2 border-dark fw-bold";

  constructor(private router: Router) { 
    console.log("constructed");
  }

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
