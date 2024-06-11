import { defineConfig, presetAttributify, presetUno, presetWebFonts, transformerDirectives } from 'unocss'

export default defineConfig({
  shortcuts: [],
  rules: [ ],
  presets: [
    presetAttributify(),
    presetUno(),
    presetWebFonts({
      fonts: {
        sans: 'Inter:400,600,800',
        mono: 'DM Mono:400,600',
        condensed: 'Roboto Condensed',
        wisper: 'Bad Script',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
  ],
})