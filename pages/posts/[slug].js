import Head from 'next/head';
import { useRouter } from 'next/router';
import { getAllPosts, getPost } from '../../utils/contentful-helper';
import { PostCard } from '../../components/PostCard';
import { BodyContent } from '../../components/BodyContent';
import { Typography, Grid, Button, Icon } from '@mui/material';
import slugStyles from '../../styles/Slug.module.css';
import { INLINES, BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import postCardStyles from '../../styles/PostCard.module.scss';
import { Divider } from '@mui/material';

// custom settings for rich text render
const richTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <Typography variant='body1' gutterBottom lineHeight={1.75}>
        {children}
      </Typography>
    ),
    [INLINES.HYPERLINK]: (node, children) => {
      if (node.data.uri.includes('youtube.com')) {
        return (
          <iframe
            className={postCardStyles.youtube}
            src={node.data.uri}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            style={{ paddingTop: '1em' }}
          ></iframe>
        );
      }
    },
  },
};

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
  const path = router.pathname;

  return (
    <>
      <Head>
        <title>MUSIKO.NET - {post.title}</title>
      </Head>
      <BodyContent path={path}>
        <PostCard post={post} />
      </BodyContent>
    </>
  );
}
