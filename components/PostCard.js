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
            width='560'
            height='315'
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

export const PostCard = ({ post, slug }) => {
  const richText = post.content.json;
  const formattedDate = new Date(post.publishDate).toLocaleDateString();
  return (
    <>
      <Grid item xs={12}>
        <Grid container spacing={0}>
          <Grid item xs={10} style={{ marginTop: '-1.5em' }}>
            <Typography variant='h1' fontSize={48} pt={2}>
              {!slug && <Link href={`/posts/${post.slug}`}>{post.title}</Link>}
              {slug && <>{post.title}</>}
            </Typography>
            <Typography
              variant='subtitle1'
              color='text.secondary'
              style={{ display: 'block', margin: '0 0 1em 0' }}
            >
              Posted: {formattedDate}
            </Typography>
            <a href={post.spotifyUri} target='_blank' rel='noreferrer'>
              <Button
                variant='contained'
                sx={{
                  marginBottom: '1em',
                  backgroundColor: '#1DB954',
                  ':hover': { bgcolor: 'darkgreen' },
                }}
              >
                <Icon
                  path={mdiSpotify}
                  title='Spotify Icon'
                  size={1}
                  style={{
                    color: 'white',
                    backgroundColor: '#1DB954',
                    borderRadius: '50%',
                    marginRight: '10px',
                  }}
                />
                Listen on Spotify
              </Button>
            </a>
            <div>{documentToReactComponents(richText, richTextOptions)}</div>
          </Grid>
        </Grid>
      </Grid>
      <Divider style={{ margin: '2em 0 2em 0' }} variant='fullWidth'></Divider>
    </>
  );
};

{
  /* <Grid item xs={2} style={{ marginRight: '-1em' }}>
<Image
  src={post.coverImage.url}
  alt={post.coverImage.title}
  height={150}
  width={150}
/>
{post.spotifyUri && (
  <Icon
    path={mdiSpotify}
    title='Spotify Icon'
    size={2}
    style={{
      color: '#1DB954',
      backgroundColor: 'black',
      borderRadius: '50%',
      display: 'block',
      marginLeft: '25%',
      marginTop: '10%',
    }}
  />
)}
{post.spotifyUri && (
  <a href={post.spotifyUri}>
    <Button
      variant='contained'
      style={{
        display: 'block',
        marginLeft: '15%',
        marginTop: '10%',
      }}
    >
      Listen
    </Button>
  </a>
)}
</Grid> */
}
