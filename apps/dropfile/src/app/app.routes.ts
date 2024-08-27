import { Route } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
];
