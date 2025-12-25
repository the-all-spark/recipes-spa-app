import Box from '@mui/material/Box';
import { styled } from '@mui/material';

export const InfoBlockContainer = styled(Box)(() => ({
  marginTop: '2.5rem',
  display: 'flex',
  flexDirection: 'row',
  gap: '1.9rem',
}));

export const ItemContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  columnGap: '1rem',
}));
