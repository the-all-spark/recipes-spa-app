import Typography from '@mui/material/Typography';
import { SxProps } from '@mui/material';

interface GeneralSpanTextProps {
  children: React.ReactNode;
  styles?: SxProps | undefined;
}

const GeneralSpanText = ({ children, styles }: GeneralSpanTextProps) => {
  return (
    <Typography component="span" sx={{ display: 'inline-block', ...styles }}>
      {children}
    </Typography>
  );
};

export default GeneralSpanText;
