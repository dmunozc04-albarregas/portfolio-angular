import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  scrollToAnchor(anchor: string) {
    this.viewportScroller.scrollToAnchor(anchor);
  }
}
