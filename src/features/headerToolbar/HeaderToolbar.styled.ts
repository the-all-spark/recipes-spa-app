import { styled } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';

export const StyledHeaderToolbar = styled(Toolbar)(() => ({
  '@media (min-width: 600px)': {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: '50px',
    paddingRight: '50px',
    minHeight: '70px',
  },
}));
