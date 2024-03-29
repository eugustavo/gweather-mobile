import { extendTheme } from 'native-base'

export const THEME = extendTheme({
  colors: {
    title: '#2E3034',
    subtitle: '#7B7B7B',
    black: '#000000',
  },
  fonts: {
    heading: 'Poppins-Bold',
    body: 'Poppins-Regular',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
})
