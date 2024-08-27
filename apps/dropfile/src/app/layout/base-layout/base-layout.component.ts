import { Component } from '@angular/core';
import { NavigationBarComponent } from './navigation-bar.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-base-layout',
  imports: [RouterModule, NavigationBarComponent],
  template: `
    <app-navigation-bar />
    <div class="flex min-h-[calc(100dvh-4rem)] flex-col">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class BaseLayoutComponent {}
