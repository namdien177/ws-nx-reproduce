import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-logo',
  template: `
    <span class="text-blue-300">Drop</span>
    <span class="font-semibold text-blue-500">File</span>
  `,
  host: {
    class: 'text-lg md:text-3xl flex items-center',
  },
})
export class LogoComponent {}
