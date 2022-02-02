import Head from 'next/head';
import { getPaginatedPosts } from '../utils/contentful-helper';
import { Config } from '../utils/Config';
import { PostList } from '../components/PostList';
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
        <title>MUSIKO.NET</title>
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
