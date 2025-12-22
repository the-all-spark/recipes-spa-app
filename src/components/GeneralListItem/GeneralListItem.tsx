import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme, SxProps, Theme } from '@mui/material/styles';

interface GeneralListItemProps {
  primary: React.ReactNode;
  secondary: React.ReactNode;
}

const GeneralListItem = ({ primary, secondary }: GeneralListItemProps) => {
  const theme = useTheme();
  return (
    <ListItem sx={{ padding: '0px' }}>
      <ListItemText
        primary={primary}
        secondary={secondary}
        slotProps={{
          primary: { fontWeight: 600 },
          secondary: {
            sx: {
              fontWeight: theme.typography.body2.fontWeight,
              color: theme.palette.secondary.main,
            } as SxProps<Theme>,
          },
        }}
      />
    </ListItem>
  );
};

export default GeneralListItem;
