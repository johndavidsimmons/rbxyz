import Head from 'next/head';
import { useRouter } from 'next/router';
import { getAllPosts, getPost } from '../../utils/contentful-helper';
import { PostCard } from '../../components/PostCard';
import { Typography, Grid } from '@mui/material';
import slugStyles from '../../styles/Slug.module.css';
import { Container } from '@mui/material';

export const getStaticPaths = async () => {
  const data = await getAllPosts();
  return {
    fallback: false,
    paths: data.blogPostCollection.items.map((post) => ({
      params: { slug: post.slug },
    })),
  };
};

export const getStaticProps = async (context) => {
  const data = await getPost(context.params.slug);
  return {
    props: { post: data.blogPostCollection.items[0] },
  };
};

export default function Post({ post }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>RB - {post.title}</title>
      </Head>
      <Container sx={{ marginLeft: '1em' }}>
        <Typography
          color='primary'
          variant='h5'
          style={{
            paddingBottom: '1em',
            marginLeft: '-.75em',
            paddingTop: '20px',
          }}
        >
          <span className={slugStyles.backbutton} onClick={() => router.back()}>
            &lt; Back | RB.XYZ Blog
          </span>
        </Typography>
        <PostCard post={post} slug={true} />
      </Container>
    </>
  );
}
