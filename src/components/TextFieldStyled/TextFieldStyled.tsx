import { SxProps } from '@mui/material';
import TextField from '@mui/material/TextField';

interface TextFieldStyledProps {
  name: string;
  label: string;
  type: 'text' | 'password';
  variant?: 'standard' | 'outlined' | 'filled';
  required?: boolean;
  autoComplete?: 'on' | 'off';
  helperText?: string;
  styles?: SxProps;
}

const TextFieldStyled = ({ name, label, type, styles }: TextFieldStyledProps) => {
  return (
    <TextField
      name={name}
      label={label}
      type={type}
      variant="outlined"
      required
      helperText={`Enter your ${name}`}
      autoComplete="off"
      sx={{
        '& .MuiInputBase-input': { height: 'auto', padding: '0.5rem' },
        '& .MuiInputBase-root': { lineHeight: '2rem' },
        '& .MuiInputLabel-root': { lineHeight: '1rem' },
        ...styles,
      }}
    />
  );
};

export default TextFieldStyled;
