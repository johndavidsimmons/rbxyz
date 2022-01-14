import Head from 'next/head';
import { useRouter } from 'next/router';
import { getAllPosts, getPost } from '../../utils/contentful-helper';
import { PostCard } from '../../components/PostCard';
import { Typography, Grid } from '@mui/material';
import slugStyles from '../../styles/Slug.module.css';

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
      <Grid
        container
        spacing={2}
        alignContent='center'
        justifyContent='left'
        style={{ paddingBottom: '1em' }}
      >
        <Grid item xs={12}>
          <Typography variant='subtitle1' gutterBottom component='div'>
            <span
              className={slugStyles.backbutton}
              onClick={() => router.back()}
            >
              &lt; Back
            </span>
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <PostCard post={post} />
        </Grid>
      </Grid>
    </>
  );
}
