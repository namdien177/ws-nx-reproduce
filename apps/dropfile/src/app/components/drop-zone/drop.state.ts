import { Injectable, signal } from '@angular/core';

@Injectable()
export class DropStateService {
  private _droppedFile = signal<File | null>(null);

  private _isDragging = signal(false);

  public get isDragging() {
    return this._isDragging.asReadonly();
  }

  public get droppedFile() {
    return this._droppedFile.asReadonly();
  }

  public setDragging(isDragging: boolean) {
    this._isDragging.set(isDragging);
  }

  public setDropFile(file: File) {
    this._droppedFile.set(file);
  }

  public clearDropFile() {
    this._droppedFile.set(null);
  }
}
