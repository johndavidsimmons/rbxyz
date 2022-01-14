import Grid from '@mui/material/Grid';
import { PostCard } from './PostCard';
import { Paginate } from './Paginate';

export const PostList = (props) => {
  const { posts, totalPages, currentPage } = props;
  // Calculate the disabled states of the next and previous links
  const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
  const prevDisabled = parseInt(currentPage, 10) === 1;
  return (
    <Grid container spacing={1}>
      {posts.map((post, idx) => (
        <Grid item key={idx} xs={12}>
          <PostCard post={post} />
        </Grid>
      ))}
      <Paginate
        totalPages={totalPages}
        currentPage={currentPage}
        nextDisabled={nextDisabled}
        prevDisabled={prevDisabled}
      />
    </Grid>
  );
};
