import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

const DifficultyLevelCircle = ({ isFilled }: { isFilled: boolean }) => {
  const theme = useTheme();
  const color = isFilled ? theme.palette.primary.main : theme.palette.secondary.light;

  return (
    <Box
      sx={{
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        backgroundColor: color,
      }}
    ></Box>
  );
};

export default DifficultyLevelCircle;
