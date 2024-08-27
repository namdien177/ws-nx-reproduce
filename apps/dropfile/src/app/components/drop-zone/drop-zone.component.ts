import {
  Component,
  effect,
  HostBinding,
  HostListener,
  inject,
  input,
} from '@angular/core';
import { cn } from '@monthly-party/js-dom';
import { LucideAngularModule, UploadIcon } from 'lucide-angular';
import { DropStateService } from './drop.state';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { EmptyZoneComponent } from './empty-zone.component';
import { HoveringZoneComponent } from './hovering-zone.component';
import { FileZoneComponent } from './file-zone.component';

@Component({
  standalone: true,
  selector: 'app-drop-zone',
  imports: [
    LucideAngularModule,
    HlmButtonDirective,
    EmptyZoneComponent,
    HoveringZoneComponent,
    FileZoneComponent,
  ],
  providers: [DropStateService],
  template: `
    @if (dropState.droppedFile()) {
    <app-file-zone />
    } @else { @if (dropState.isDragging()) {
    <app-hovering-zone />
    } @else {
    <app-empty-zone (selectedFile)="this.dropState.setDropFile($event)">
      <ng-content />
    </app-empty-zone>
    } }
  `,
})
export class DropZoneComponent {
  readonly UploadIcon = UploadIcon;

  readonly dropState = inject(DropStateService);

  className = input<string | string[] | undefined>();

  @HostBinding('class')
  hostClassName: string | undefined;

  constructor() {
    effect(() => {
      const defaultClasses =
        'flex aspect-square w-10/12 max-w-[512px] items-center justify-center rounded-lg border-2 border-dashed p-8';
      this.hostClassName = cn(defaultClasses, this.className());
    });
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.dropState.setDragging(true);
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
    this.dropState.setDragging(false);
    const file = event.dataTransfer?.files?.[0];
    if (!file) {
      return;
    }
    this.dropState.setDropFile(file);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.dropState.setDragging(false);
  }
}
