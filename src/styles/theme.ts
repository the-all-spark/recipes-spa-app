import { createTheme } from '@mui/material/styles';
import { componentsOverrides } from '@/styles/overrides';

const theme = createTheme({
  palette: {
    primary: {
      main: '#741c1c',
    },
    secondary: {
      main: '#000000b3',
      light: '#cecece',
    },
    error: {
      main: '#be0000',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Flatshoes-Regular',
      fontSize: '3.5rem',
      fontWeight: 400,
    },
    h2: {
      fontFamily: 'Flatshoes-Regular',
      fontSize: '2rem',
      fontWeight: 400,
    },
    h3: {
      fontFamily: 'Flatshoes-Regular',
      fontSize: '1.7rem',
      fontWeight: 400,
    },
    body1: {
      fontSize: '1.1rem',
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 400,
    },
  },
  components: componentsOverrides,
});

export default theme;
