import { AfterViewInit, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DOCUMENT } from '@angular/common';

const ALLOWED_THEMES = ['dark', 'light'] as const;
type AllowedTheme = (typeof ALLOWED_THEMES)[number];

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  host: {
    class: 'bg-background text-foreground flex flex-col relative',
  },
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements AfterViewInit {
  private _document = inject(DOCUMENT);

  ngAfterViewInit(): void {
    const theme = this.getLocalStorageTheme();
    this.setLocalStorageTheme(theme);
  }

  setLocalStorageTheme(theme: AllowedTheme) {
    if (!this._document) {
      return;
    }

    this._document.documentElement.classList.remove(...ALLOWED_THEMES);

    if (theme === 'dark') {
      this._document.documentElement.classList.add('dark');
    }
  }

  getLocalStorageTheme(
    themeKey = 'theme',
    defaultTheme: AllowedTheme = 'dark'
  ): AllowedTheme {
    if (!this._document) {
      return defaultTheme;
    }

    const localStorage = this._document.defaultView?.localStorage;

    if (!localStorage) {
      return defaultTheme;
    }

    const value = localStorage.getItem(themeKey);
    if (!value) {
      // default theme
      return defaultTheme;
    }

    // ensure value is a valid theme
    if (ALLOWED_THEMES.includes(value as never)) {
      return value as AllowedTheme;
    }

    // reset the theme
    localStorage.setItem(themeKey, defaultTheme);
    return defaultTheme;
  }
}
