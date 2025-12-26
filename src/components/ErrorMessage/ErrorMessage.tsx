import Typography from '@mui/material/Typography';
import { SxProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface ErrorMessageProps {
  children: React.ReactNode;
  styles?: SxProps | undefined;
}

const ErrorMessage = ({ children, styles }: ErrorMessageProps) => {
  const theme = useTheme();

  return (
    <Typography
      variant="body1"
      sx={{
        marginBottom: '1rem',
        color: theme.palette.error.main,
        fontWeight: 700,
        textAlign: 'center',
        ...styles,
      }}
    >
      {children}
    </Typography>
  );
};

export default ErrorMessage;
