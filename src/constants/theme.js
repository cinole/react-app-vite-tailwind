import { THEME } from '.'
import { Colors, Effects } from './colors'
import { Typography } from './typography'

export const validThemeMode = (mode) => mode && [THEME.LIGHT, THEME.DARK].includes(mode)
  ? mode
  : THEME.LIGHT

export const toCssVariables = (mode) => {
  const paletteMode = validThemeMode(mode)

  return {
    '--color-black-100': Colors.black[100],
    '--color-black-200': Colors.black[200],
    '--color-black-300': Colors.black[300],
    '--color-black-400': Colors.black[400],
    '--color-black-500': Colors.black[500],
    '--color-white-100': Colors.white[100],
    '--color-white-200': Colors.white[200],
    '--color-white-300': Colors.white[300],
    '--color-white-400': Colors.white[400],
    '--color-white-500': Colors.white[500],
    '--color-common-main': Colors.common.main,
    '--color-common-secondary': Colors.common.secondary,
    '--color-common-secondary50': Colors.common.secondary50,
    '--color-common-textLink': Colors.common.textLink,
    '--color-common-textDisabled': Colors.common.textDisabled,
    '--color-common-success': Colors.common.success,
    '--color-common-warning': Colors.common.warning,
    '--color-common-error': Colors.common.error,
    '--color-common-azure100': Colors.common.azure100,
    '--color-common-azure200': Colors.common.azure200,
    '--color-common-azure300': Colors.common.azure300,
    '--color-common-azure400': Colors.common.azure400,
    '--color-common-azure500': Colors.common.azure500,
    '--color-common-azureA100': Colors.common.azureA100,
    '--color-common-azureA200': Colors.common.azureA200,
    '--color-common-effect1': Effects.shadowLarge,
    '--color-common-effect2': Effects.shadowMedium,
    '--color-common-effect3': Effects.shadowThin,
    '--color-common-effect4': Effects.linearStroke,
    '--color-common-effect5': Effects.linearBackground,
    '--color-theme-background': Colors[paletteMode].background,
    '--color-theme-secondary': Colors[paletteMode].secondary,
    '--color-theme-text': Colors[paletteMode].text,
    '--color-theme-blueA300': Colors[paletteMode].blueA300,
    '--color-theme-blueA400': Colors[paletteMode].blueA400,
    '--color-theme-cardGameBottomBg': Effects[paletteMode].cardGameBottomBg,
    '--color-theme-effect1': Effects[paletteMode].linearStrokeCard,
    '--color-theme-effect2': Effects[paletteMode].linearLine,
    '--color-theme-effect3': Effects[paletteMode].linearStrokeButton,
    '--color-theme-effect4': Effects[paletteMode].linearLineCard
  }
}

export const genThemeWithPaletteMode = (paletteMode) => ({
  colors: toCssVariables(paletteMode),
  palette: {
    mode: paletteMode, /** paletteMode */
    primary: {
      main: toCssVariables(paletteMode)['--color-common-main'],
      background: toCssVariables(paletteMode)['--color-theme-background'],
      secondary: toCssVariables(paletteMode)['--color-theme-secondary'],
      blueA300: toCssVariables(paletteMode)['--color-theme-blueA300'],
      blueA400: toCssVariables(paletteMode)['--color-theme-blueA400'],
      cardGameBottomBg: toCssVariables(paletteMode)['--color-theme-cardGameBottomBg'],
      cardStroke: toCssVariables(paletteMode)['--color-theme-effect1'],
      frameLinear: toCssVariables(paletteMode)['--color-theme-effect2']
    },
    text: {
      primary: toCssVariables(paletteMode)['--color-theme-text'],
      secondary: toCssVariables(paletteMode)['--color-common-secondary'],
      secondary50: toCssVariables(paletteMode)['--color-common-secondary50'],
      link: toCssVariables(paletteMode)['--color-common-textLink'],
      disabled: toCssVariables(paletteMode)['--color-common-textDisabled']
    }
  },
  typography: Typography,
  spacing: 8,
  breakpoints: {
    values: {
      xs: 577,
      sm: 767,
      md: 993,
      lg: 1201,
      xl: 1441
    }
  }
})
