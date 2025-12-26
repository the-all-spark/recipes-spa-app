import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { useTheme } from '@mui/material/styles';

const guestData = [
  { username: 'emmaj', password: 'emmajpass' },
  { username: 'jamesd', password: 'jamesdpass' },
];

const TableGuests = () => {
  const theme = useTheme();

  return (
    <Table size="small" aria-label="table with guest accounts" sx={{ width: '80%', margin: '0 auto' }}>
      <TableHead sx={{ backgroundColor: theme.palette.secondary.light }}>
        <TableRow>
          <TableCell align="center" sx={{ fontWeight: 700 }}>
            Username
          </TableCell>
          <TableCell align="center" sx={{ fontWeight: 700 }}>
            Password
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {guestData.map((guest) => (
          <TableRow key={guest.username}>
            <TableCell scope="row" align="center">
              {guest.username}
            </TableCell>
            <TableCell align="center">{guest.password}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableGuests;
