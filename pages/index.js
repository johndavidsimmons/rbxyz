import Head from 'next/head';
import { getPaginatedPosts } from './utils/contentful-helper';
import Container from '@mui/material/Container';
import { Config } from './utils/Config';
import { PostList } from '../components/PostList';

export async function getStaticProps() {
  const posts = await getPaginatedPosts(1);
  const totalPages = Math.ceil(posts.total / Config.pagination.pageSize);

  return {
    props: {
      posts: posts.items,
      totalPages,
      currentPage: '1',
    },
  };
}
export default function BlogIndex(props) {
  const { posts, totalPages, currentPage } = props;
  return (
    <>
      <Head>
        <title>RecordBin</title>
      </Head>
      <Container sx={{ marginLeft: '1em' }}>
        <PostList
          posts={posts}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </Container>
    </>
  );
}
