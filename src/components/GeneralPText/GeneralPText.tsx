import { SxProps } from '@mui/material';

import StyledGeneralPText from '@/components/GeneralPText/GeneralPText.styled';

interface GeneralPTextProps {
  children: React.ReactNode;
  styles?: SxProps | undefined;
}

const GeneralPText = ({ children, styles }: GeneralPTextProps) => {
  return (
    <StyledGeneralPText variant="body1" sx={styles ? styles : null}>
      {children}
    </StyledGeneralPText>
  );
};

export default GeneralPText;
