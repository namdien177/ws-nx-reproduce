import defaultTheme from 'tailwindcss/defaultTheme';
import { createGlobPatternsForDependencies } from '@nxtensions/astro/tailwind';
import { join } from 'path';

import preset from '../../tailwind-preset.config.mjs';
import shadcn from '../../libs/shadcn/src/tailwind.config.mjs';

/** @type {import('tailwindcss').Config} */
export const presets = [preset, shadcn];
export const content = [
  join(
    __dirname,
    'src/**/!(*.stories|*.spec).{astro,html,js,jsx,md,svelte,ts,tsx,vue}'
  ),
  ...createGlobPatternsForDependencies(__dirname),
];
export const theme = {
  extend: {
    fontFamily: {
      astro: ['Montserrat Variable', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      prose: 'var(--tw-prose-body)',
    },
    spacing: {
      18: '4.5rem',
    },
    keyframes: {
      meteor: {
        '0%': { transform: 'translateY(-20%) translateX(-50%)' },
        '100%': { transform: 'translateY(300%) translateX(-50%)' },
      },
    },
    animation: {
      meteor: 'meteor var(--duration) var(--delay) ease-in-out infinite',
    },
  },
};
export const plugins = [];
