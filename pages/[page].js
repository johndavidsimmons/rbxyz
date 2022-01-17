import Head from 'next/head';
import {
  getTotalPostNumber,
  getPaginatedPosts,
} from '../utils/contentful-helper';
import Container from '@mui/material/Container';
import { Config } from '../utils/Config';
import { PostList } from '../components/PostList';
import { BodyContent } from '../components/BodyContent';
import { useRouter } from 'next/router';

export async function getStaticPaths() {
  const totalPosts = await getTotalPostNumber();
  const totalPages = Math.ceil(totalPosts / Config.pagination.pageSize);

  const paths = [];

  /**
   * Start from page 2, so we don't replicate /blog
   * which is page 1
   */
  for (let page = 2; page <= totalPages; page++) {
    paths.push({ params: { page: page.toString() } });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const posts = await getPaginatedPosts(params.page);
  const totalPages = Math.ceil(posts.total / Config.pagination.pageSize);

  return {
    props: {
      posts: posts.items,
      totalPages,
      currentPage: params.page,
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
