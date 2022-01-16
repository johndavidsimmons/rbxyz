import { Button, Icon } from '@mui/material';
import Image from 'next/image';
import headerStyles from '../styles/Header.module.scss';
import { mdiSpotify } from '@mdi/js';

export const MobileHeader = () => {
  const spotifyLink =
    'https://open.spotify.com/user/johndavidsimmons?si=0d0593c4f6154e36';
  return (
    <>
      <Image
        className={headerStyles.profile}
        src='/images/profile.png'
        width='75px'
        height='75px'
        alt='profile picture'
      />
      <a
        href={spotifyLink}
        style={{ paddingLeft: '25%' }}
        target='_blank'
        rel='noreferrer'
      >
        <Button
          variant='contained'
          sx={{
            marginBottom: '1em',
            backgroundColor: '#1DB954',
            ':hover': { bgcolor: 'darkgreen' },
          }}
        >
          Follow Me on Spotify
        </Button>
      </a>
    </>
  );
};
