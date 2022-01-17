import { PostCard } from './PostCard';
import { Paginate } from './Paginate';

export const PostList = (props) => {
  const { posts, totalPages, currentPage } = props;
  // Calculate the disabled states of the next and previous links
  const nextDisabled = parseInt(currentPage, 10) === parseInt(totalPages, 10);
  const prevDisabled = parseInt(currentPage, 10) === 1;
  return (
    <>
      {posts.map((post, idx) => (
        <PostCard key={idx} post={post} slug={false} />
      ))}
      <Paginate
        totalPages={totalPages}
        currentPage={currentPage}
        nextDisabled={nextDisabled}
        prevDisabled={prevDisabled}
      />
    </>
  );
};
