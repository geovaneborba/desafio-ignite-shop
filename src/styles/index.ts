import { createStitches } from '@stitches/react'

export const {
  getCssText,
  styled,
  config,
  globalCss,
  keyframes,
  theme,
  createTheme,
  css,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',

      gray900: '#121214',
      gray800: '#202024',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',
      grayIcon: '#8D8D99',

      green500: '#00875f',
      green300: '#00b37e',
    },

    fontSizes: {
      xs: '0.875rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
  media: {
    xs: '(min-width: 320px) and (max-width: 640px)',
    sm: '(min-width: 640px) and (max-width: 768px)',
    md: '(min-width: 768px) and (max-width: 1024px)',
    lg: '(min-width: 1024px) and (max-width: 1366px)',
  },
})
