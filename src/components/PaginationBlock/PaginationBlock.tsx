import Pagination from '@mui/material/Pagination';

interface PaginationBlockProps {
  page: number;
  totalPages: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const PaginationBlock = ({ page, totalPages, handlePageChange }: PaginationBlockProps) => {
  return (
    <Pagination
      onChange={handlePageChange}
      page={page}
      count={totalPages}
      shape="rounded"
      variant="outlined"
      size="large"
      sx={{ marginTop: '2rem', marginBottom: '2rem', '& .MuiPagination-ul': { justifyContent: 'center' } }}
    />
  );
};

export default PaginationBlock;
