// https://github.com/chakra-ui/chakra-ui/tree/master/packages/chakra-ui/src/theme
import {theme} from '@chakra-ui/core';
// import {customIcons} from './icons';

export const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primaryRed: '#EB4458',
    darkBlue: {
      50: '#eaf3fe',
      100: '#ccd9e7',
      200: '#adbfd2',
      300: '#8da6bf',
      400: '#6e8cac',
      500: '#547392',
      600: '#405972',
      700: '#2d4052',
      800: '#192633',
      900: '#010e16',
    },
    hoveredDarkBlue: '#1B2C3E',
    bgGray: '#EAEDED',
  },
  icons: {
    ...theme.icons,
    // ...customIcons,
  },
};
