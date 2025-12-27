import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const PopupBackgroundContainer = styled(Box)(() => ({
  position: 'fixed',
  zIndex: 2,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  overflow: 'auto',
  backgroundColor: '#00000080',
}));

export const PopupBlockContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 3,
  width: '27%',
  height: '30%',
  borderRadius: '1rem',
  backgroundColor: '#f0f0f0',
  padding: '2rem',
  border: `3px solid ${theme.palette.primary.main}`,
  justifyContent: 'center',
  alignItems: 'center',
}));

export const PopupContentContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  columnGap: '1rem',
}));
