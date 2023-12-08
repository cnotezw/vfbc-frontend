import { createTheme } from '@mui/material/styles';
import { amber, deepOrange, grey, } from '@mui/material/colors';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === 'dark' && {
        main: amber[300],
      }),
    },
    ...(mode === 'dark' && {
      background: {
        default: grey[900],
        paper: grey[900],
      },
    }),
    text: {
      ...(mode === 'light'
        ? {
            primary: grey[900],
            secondary: deepOrange[800],
          }
        : {
            primary: '#fff',
            secondary: grey[500],
          }),
    },
  },
});

export default createTheme(getDesignTokens('light'));