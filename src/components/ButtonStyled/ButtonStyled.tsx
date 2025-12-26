import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { SxProps } from '@mui/material';

interface ButtonStyledProps {
  children: React.ReactNode;
  type?: 'submit' | 'button';
  mode: 'light' | 'dark';
  styles?: SxProps | undefined;
}

const ButtonStyled = ({ children, type = 'button', mode, styles }: ButtonStyledProps) => {
  const theme = useTheme();

  let color = mode === 'light' ? theme.palette.primary.main : theme.palette.secondary.light;

  return (
    <Button
      type={type}
      sx={{
        color: color,
        fontWeight: 700,
        border: `2px solid ${color}`,
        height: '48px',
        padding: '0 1.5rem',
        ...styles,
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonStyled;
