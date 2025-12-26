import { styled } from '@mui/material';
import { FormEvent } from 'react';
import Box from '@mui/material/Box';

interface FormContainerProps {
  noValidate?: boolean;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

export const ContentContainer = styled(Box)(() => ({
  height: '64vh',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'column',
}));

export const FormBlockContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '0.7rem',
  marginTop: '2rem',
}));

export const FormContainer = styled('form')<FormContainerProps>(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'start',
  flexDirection: 'row',
  columnGap: '1rem',
}));

export const TableGuestDataContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  columnGap: '1rem',
  marginBottom: '2rem',
}));
