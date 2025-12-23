import Typography from '@mui/material/Typography';
import { SxProps } from '@mui/material';

interface H3TextProps {
  children: React.ReactNode;
  styles?: SxProps | undefined;
}

const H3Text = ({ children, styles }: H3TextProps) => {
  return (
    <Typography
      variant="h3"
      component="h3"
      sx={{ display: 'inline-block', marginTop: '0.5rem', marginBottom: '0.5rem', ...styles }}
    >
      {children}
    </Typography>
  );
};

export default H3Text;
