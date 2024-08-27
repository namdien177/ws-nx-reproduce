import { Component, inject } from '@angular/core';
import { DropStateService } from './drop.state';

@Component({
  standalone: true,
  selector: 'app-file-zone',
  template: `
    @if (file) {
      <div class="bg-muted flex gap-4 rounded-lg p-4 shadow-lg">
        <div class="bg-muted-foreground size-12 rounded-lg"></div>

        <div class="flex flex-1 flex-col truncate">
          <h2 class="truncate text-lg">{{ file.name }}</h2>
          <p class="text-muted-foreground">{{ file.size }}</p>
        </div>
      </div>
    }
  `,
  host: {
    class: 'flex flex-col gap-8 w-full',
  },
})
export class FileZoneComponent {
  readonly dropState = inject(DropStateService);

  public get file() {
    return this.dropState.droppedFile();
  }
}
