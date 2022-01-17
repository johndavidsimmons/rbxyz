import Head from 'next/head';
import { getPaginatedPosts } from '../utils/contentful-helper';
import Container from '@mui/material/Container';
import { Config } from '../utils/Config';
import { PostList } from '../components/PostList';
import { Typography } from '@mui/material';
import { BodyContent } from '../components/BodyContent';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const path = router.pathname;
  const { posts, totalPages, currentPage } = props;
  return (
    <>
      <Head>
        <title>RB.XYZ</title>
      </Head>
      <BodyContent path={path}>
        <PostList
          posts={posts}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </BodyContent>
    </>
  );
}
