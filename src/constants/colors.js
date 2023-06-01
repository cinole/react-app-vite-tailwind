// colors mapping from figma
export const Colors = {
  black: {
    100: '#E6E6E6',
    200: '#999999',
    300: '#676767',
    400: '#343434',
    500: '#151515'
  },
  white: {
    100: '#F0FFFF',
    200: '#B3B6C2',
    300: '#8A8D9B',
    400: '#545765',
    500: '#3A3C45'
  },
  common: {
    main: '#0080FF',
    textSub: '#8A8D9B',
    textSub50: 'rgba(138, 141, 155, 0.5)',
    textLink: '#0080FF',
    textDisabled: '#454F59',
    success: '#03CB0B',
    warning: '#FD5200',
    error: '#F00A0A',
    azure100: '#4B92DB',
    azure200: '#0080FF',
    azure300: '#003FFF',
    azure400: '#0335B2',
    azure500: '#0B1C46',
    azureA100: 'rgba(0, 128, 255, 0.1)',
    azureA200: 'rgba(0, 128, 255, 0.4)'
  },
  light: {
    background: '#FFFFFF',
    secondary: '#9A9A9A',
    text: '#040404',
    blueA300: 'rgba(154, 154, 154, 0.1)',
    blueA400: 'rgba(154, 154, 154, 0.1)'
  },
  // not implemented
  dark: {
    background: '#151515',
    secondary: '#F2E041',
    text: '#F0FFFF',
    blueA300: 'rgba(240, 255, 255, 0.1)',
    blueA400: 'rgba(11, 28, 70, 0.6)'
  }
}

export const Effects = {
  shadowLarge:
    '0px -3px 16px 8px rgba(0, 128, 255, 0.8), 0px 4px 16px 8px rgba(0, 128, 255, 0.8)',
  shadowMedium:
    '0px -3px 16px 8px rgba(0, 128, 255, 0.3), 0px 4px 16px 8px rgba(0, 128, 255, 0.3)',
  shadowThin:
    '0px -3px 8px 4px rgba(0, 128, 255, 0.5), 0px 4px 8px 4px rgba(0, 128, 255, 0.5)',
  linearStroke: 'linear-gradient(147.34deg, #0080FF 31.7%, #002FF8 98.92%)',
  linearBackground:
    'linear-gradient(90deg, rgba(0, 128, 255, 0) -2.63%, rgba(0, 128, 255, 0.3) 100%)',
  light: {
    cardGameBottomBg: 'radial-gradient(132.96% 132.96% at 50% -32.96%, rgba(217, 217, 217, 0) 0%, rgba(0, 0, 0, 0.1) 100%)',
    linearStrokeCard:
      'linear-gradient(360deg, rgba(154, 154, 154, 0) -42.31%, rgba(154, 154, 154, 0.4) 134.09%)',
    linearLine:
      'linear-gradient(360deg, rgba(154, 154, 154, 0) -42.31%, rgba(154, 154, 154, 0.8) 134.09%)',
    linearStrokeButton:
      'linear-gradient(360deg, rgba(154, 154, 154, 0) -42.31%, rgba(154, 154, 154, 0.4) 134.09%)',
    linearLineCard:
      'linear-gradient(270deg, rgba(240, 255, 255, 0.09) 0%, rgba(217, 217, 217, 0.36) 49.03%, rgba(240, 255, 255, 0.09) 100.81%)'
  },
  dark: {
    cardGameBottomBg: 'radial-gradient(132.96% 132.96% at 50% -32.96%, rgba(21, 21, 21, 0) 0%, rgba(21, 21, 21, 0.4) 100%)',
    linearStrokeCard:
      'linear-gradient(360deg, rgba(240, 255, 255, 0) -42.31%, rgba(240, 255, 255, 0.4) 134.09%)',
    linearLine:
      'linear-gradient(360deg, rgba(240, 255, 255, 0) -42.31%, rgba(240, 255, 255, 0.8) 134.09%)',
    linearStrokeButton:
      'linear-gradient(360deg, rgba(240, 255, 255, 0.5) -42.31%, rgba(240, 255, 255, 0.8) 134.09%)',
    linearLineCard:
      'linear-gradient(270deg, rgba(240, 255, 255, 0.15) 0%, rgba(240, 255, 255, 0.6) 49.03%, rgba(240, 255, 255, 0.15) 100.81%)'
  }
}
