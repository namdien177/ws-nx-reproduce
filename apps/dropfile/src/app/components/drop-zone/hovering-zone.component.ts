import { Component } from '@angular/core';
import { LucideAngularModule, UploadIcon } from 'lucide-angular';

@Component({
  standalone: true,
  selector: 'app-hovering-zone',
  imports: [LucideAngularModule],
  template: `
    <lucide-icon [img]="UploadIcon" class="size-8 animate-pulse" />
    <p class="text-muted-foreground animate-pulse">Drop the file here...</p>
  `,
  host: {
    class: 'flex flex-col items-center justify-center pointer-events-none',
  },
})
export class HoveringZoneComponent {
  protected readonly UploadIcon = UploadIcon;
}
