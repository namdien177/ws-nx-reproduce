import { Component } from '@angular/core';
import { DropZoneComponent } from '../../components/drop-zone/drop-zone.component';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <div
      class="flex min-h-[calc(100dvh-4rem)] flex-col items-center justify-center"
    >
      <app-drop-zone>
        <h1 class="text-center text-4xl font-bold">
          Drop your files here to start sharing
        </h1>
      </app-drop-zone>
    </div>
  `,
  imports: [DropZoneComponent],
})
export class HomeComponent {}
