export const COLOR_PALETTE = {
  terra500: '#CC4E37',
  black200: '#E4E5E6',
  black300: '#A9ABB0',
  black400: '#373839',
  black500: '#050608',
  success500: '#4CAF50',
  white: '#FFF',

} as const

export type ColorToken = keyof typeof COLOR_PALETTE
