import { Component, output } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-empty-zone',
  imports: [HlmButtonDirective, FormsModule],
  template: ` <div class="flex flex-col gap-8">
    <ng-content />
    <hr class="mx-auto w-5/12" />
    <label class="cursor-pointer" hlmBtn>
      <input
        type="file"
        hidden
        [multiple]="false"
        (change)="onInputFileChange($event)"
      />
      Click here to upload
    </label>
  </div>`,
})
export class EmptyZoneComponent {
  selectedFile = output<File>();

  onInputFileChange(event: Event) {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files && files.length > 0) {
      this.selectedFile.emit(files[0]);
    }
  }
}
