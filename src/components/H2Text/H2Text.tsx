import Typography from '@mui/material/Typography';
import { SxProps } from '@mui/material';

interface H2TextProps {
  children: React.ReactNode;
  styles?: SxProps | undefined;
}

const H2Text = ({ children, styles }: H2TextProps) => {
  return (
    <Typography
      variant="h2"
      component="h2"
      sx={{ textAlign: 'center', textDecoration: 'underline', marginBottom: '1rem', ...styles }}
    >
      {children}
    </Typography>
  );
};

export default H2Text;
