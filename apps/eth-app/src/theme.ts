import { createTheme } from '@mui/material/styles';

export const colors = {
  primary: {
    main: '#F7815C',
    light: '#FEEFEB',
    dark: '#AE593E'
  },
  secondary: {
    main: '#292845',
    light: '#B5B5E0',
    dark: '#141322'
  },
  success: {
    main: '#4CAF50',
    light: '#B5ECBE',
    dark: '#245726'
  },
  error: {
    main: '#F44336',
    light: '#F6C7C4',
    dark: '#89221A'
  },
  warning: {
    main: '#FF9900',
    light: '#F5CA92',
    dark: '#A96500'
  },
  info: {
    main: '#00CFE8',
    light: '#A8E5EF',
    dark: '#00707D'
  },
  grey: {
    50: '#EDEFF0',
    100: '#D1D5D8',
    200: '#B4BAC4',
    300: '#969EAC',
    400: '#7F899A',
    500: '#697589',
    600: '#5C6778',
    700: '#4B5462',
    800: '#3B414C',
    900: '#292D35',
    DEFAULT: '#4B5462'
  },
  white: '#FFFFFF'
};

export const BaseMuiTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 9999
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          color: 'inherit',
          backgroundColor: 'inherit',
          '&:before, &:after': {
            display: 'none'
          },
          '&:hover': {
            backgroundColor: 'unset'
          },
          '&.Muifocus': {
            backgroundColor: 'unset'
          }
        },
        input: {
          padding: '0.5rem 1rem'
        }
      }
    }
  }
});
