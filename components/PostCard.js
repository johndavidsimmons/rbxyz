import Image from 'next/image';
import Link from 'next/link';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { mdiSpotify } from '@mdi/js';
import Icon from '@mdi/react';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { INLINES, BLOCKS } from '@contentful/rich-text-types';
import postCardStyles from '../styles/PostCard.module.scss';

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

const esperantoMonths = {
  1: 'Januaro',
  2: 'Februaro',
  3: 'Marto',
  4: 'Aprilo',
  5: 'Majo',
  6: 'Junio',
  7: 'Julio',
  8: 'Aŭgusto',
  9: 'Septembro',
  10: 'Oktobro',
  11: 'Novembro',
  12: 'Decembro',
};

export const PostCard = ({ post }) => {
  const richText = post.content.json;
  const formattedDate = new Date(post.publishDate).toLocaleDateString();
  const postMonth = `${esperantoMonths[formattedDate.split('/')[0]]}`;
  return (
    <>
      <Typography variant='h1' pt={2} className={postCardStyles.titleHover}>
        {post.slug && <Link href={`/posts/${post.slug}`}>{post.title}</Link>}
        {!post.slug && <>{post.title}</>}
      </Typography>
      <Typography
        variant='subtitle1'
        color='text.secondary'
        style={{ display: 'block', margin: '.4em 0 1em 0' }}
      >
        Posted: {postMonth} {formattedDate.split('/').slice(1, 3).join(', ')}
      </Typography>
      {post.spotifyUri && (
        <a href={post.spotifyUri} target='_blank' rel='noreferrer'>
          <Button
            variant='contained'
            color='secondary'
            sx={{
              color: 'white',
              marginBottom: '1em',
              ':hover': { bgcolor: 'darkgreen' },
            }}
          >
            Artist Spotify
          </Button>
        </a>
      )}

      {documentToReactComponents(richText, richTextOptions)}
      <Divider style={{ margin: '2em 0 2em 0' }} variant='fullWidth'></Divider>
    </>
  );
};
