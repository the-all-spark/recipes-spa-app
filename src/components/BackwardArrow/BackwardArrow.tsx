import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

interface BackwardArrowProps {
  handleBackNavigation: () => void;
}

const BackwardArrow = ({ handleBackNavigation }: BackwardArrowProps) => {
  const theme = useTheme();

  return (
    <IconButton
      aria-label="Go backward"
      onClick={handleBackNavigation}
      sx={{ display: 'inline-block', lineHeight: 0, position: 'fixed', top: '6rem', left: '8rem', padding: '1rem' }}
    >
      <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.5 33.75V45L0 22.5L22.5 0V11.25H45V33.75H22.5Z" fill={theme.palette.secondary.light} />
      </svg>
    </IconButton>
  );
};

export default BackwardArrow;
