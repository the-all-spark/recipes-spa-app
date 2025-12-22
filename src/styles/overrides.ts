import type { Components } from '@mui/material/styles';

export const componentsOverrides: Components = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        margin: 0,
        marginTop: '100px',
        padding: 0,
        paddingLeft: '100px',
        paddingRight: '100px',
      },
    },
  },
};
