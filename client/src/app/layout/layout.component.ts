import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  navbartype: string = 'main';

  constructor(private objrouter: Router) {}

  ngOnInit(): void {
    this.objrouter.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.startsWith('/cart')) {
          this.navbartype = 'secondary';
        } else {
          this.navbartype = 'main';
        }
      }
    });
  }
}
