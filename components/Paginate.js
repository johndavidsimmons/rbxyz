import { Pagination } from '@mui/material';
import { useRouter } from 'next/router';

export const Paginate = (props) => {
  const { totalPages, currentPage, prevDisabled, nextDisabled } = props;

  const prevPageUrl =
    currentPage === '2' ? '/' : `/${parseInt(currentPage, 10) - 1}`;

  const nextPageUrl = `/${parseInt(currentPage, 10) + 1}`;

  const router = useRouter();
  const handleChange = (event, value) => {
    console.log('onCHANGE!!!!');
    if (value > currentPage) {
      router.push({
        pathname: nextPageUrl,
      });
    } else if (value < currentPage) {
      router.push({
        pathname: prevPageUrl,
      });
    }
  };

  return (
    <>
      <Pagination
        count={totalPages}
        color='primary'
        hideNextButton={nextDisabled}
        hidePrevButton={prevDisabled}
        page={parseInt(currentPage)}
        onChange={handleChange}
        defaultPage={1}
        sx={{ padding: '1em 0 5em 0' }}
      />
    </>
  );
};
