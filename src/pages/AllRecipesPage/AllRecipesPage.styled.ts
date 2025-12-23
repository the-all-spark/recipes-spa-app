import { styled } from '@mui/material';
import Box from '@mui/material/Box';

export const RecipesContainer = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '2rem',
  justifyContent: 'space-between',
  margin: '0 auto',
  marginTop: '2rem',
  marginBottom: '2rem',
}));
