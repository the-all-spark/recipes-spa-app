import { styled } from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';

export const CardContainer = styled(Card)(({ theme }) => ({
  width: '31%',
  border: `1px solid ${theme.palette.secondary.light}`,
}));

export const CardActionAreaContainer = styled(CardActionArea)(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
}));

export const CardContentContainer = styled(CardContent)(() => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  justifyContent: 'space-between',
}));

export const InfoContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '& .MuiTypography-root': {
    marginTop: 0,
    marginBottom: 0,
  },
}));

export const ValueInfoContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  columnGap: '1rem',
  marginBottom: '0.5rem',
}));
