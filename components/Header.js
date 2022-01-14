import headerStyles from '../styles/Header.module.scss';
import Icon from '@mdi/react';
import Image from 'next/image';
import { mdiSpotify } from '@mdi/js';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Header = () => {
  const spotifyLink =
    'https://open.spotify.com/user/johndavidsimmons?si=0d0593c4f6154e36';
  return (
    <>
      <Grid
        container
        spacing={2}
        direction='column'
        alignItems='center'
        justifyContent='center'
      >
        <Grid item xs={12}>
          <Image
            className={headerStyles.profile}
            src='/images/profile.png'
            width='100'
            height='100'
            alt='profile picture'
          />
        </Grid>
        <Grid item xs={8} width='60%'>
          <Typography variant='subtitle1' gutterBottom component='div'>
            I use this blog as a way to learn React, NextJS, Contentful, and the
            Spotify API.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Icon
            path={mdiSpotify}
            title='Spotify Icon'
            size={2}
            style={{
              color: '#1DB954',
              backgroundColor: 'black',
              borderRadius: '50%',
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <a href={spotifyLink}>
            <Button variant='contained'>Follow Me on Spotify</Button>
          </a>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='subtitle2' gutterBottom component='div'>
            Spotify API stuff here
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
