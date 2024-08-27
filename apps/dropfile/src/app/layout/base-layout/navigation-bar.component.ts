import { Component } from '@angular/core';
import { LogoComponent } from '../logo.component';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navigation-bar',
  imports: [LogoComponent, RouterLink],
  template: `
    <nav class="sticky inset-x-0 top-0 flex h-16 items-center justify-center">
      <div class="container flex items-center px-8">
        <div class="md:flex-1"></div>
        <a routerLink="/" class="contents">
          <app-logo />
        </a>
        <div class="md:flex-1"></div>
      </div>
    </nav>
  `,
})
export class NavigationBarComponent {}
