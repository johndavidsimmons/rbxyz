import headerStyles from '../styles/Header.module.scss';
import Icon from '@mdi/react';
import Image from 'next/image';
import { mdiSpotify } from '@mdi/js';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/material';

export const Header = () => {
  const spotifyLink =
    'https://open.spotify.com/user/johndavidsimmons?si=0d0593c4f6154e36';
  return (
    <>
      <div style={{ paddingLeft: '30%' }}>
        <Image
          className={headerStyles.profile}
          src='/images/profile.png'
          width='150px'
          height='150px'
          alt='profile picture'
        />
      </div>
      <a
        href={spotifyLink}
        target='_blank'
        rel='noreferrer'
        style={{ paddingLeft: '22%' }}
      >
        <Button
          variant='contained'
          color='secondary'
          sx={{
            marginTop: '10px',
            minWidth: '100px',
            color: 'white',
            ':hover': { bgcolor: 'darkgreen' },
          }}
        >
          <Icon
            path={mdiSpotify}
            title='Spotify Icon'
            size={1}
            style={{
              color: 'white',
              borderRadius: '50%',
              marginRight: '10px',
              ':hover': { bgcolor: 'darkgreen' },
            }}
          />
          Follow Me on Spotify
        </Button>
      </a>
    </>
  );
};

export default Header;
