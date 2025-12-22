import Typography from '@mui/material/Typography';

interface H1TextProps {
  children: React.ReactNode;
}

const H1Text = ({ children }: H1TextProps) => {
  return (
    <Typography variant="h1" component="h1" sx={{ textAlign: 'center' }}>
      {children}
    </Typography>
  );
};

export default H1Text;
