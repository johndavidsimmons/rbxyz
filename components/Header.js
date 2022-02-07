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
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignContent='center'
      >
        <Grid item xs={12}>
          <Grid
            container
            justifyContent='center'
            alignContent='center'
            alignItems='center'
            direction='column'
          >
            <Grid item xs={12}>
              <Image
                className={headerStyles.profile}
                src='/images/profile.png'
                width='150px'
                height='150px'
                alt='profile picture'
              />
            </Grid>
            <Grid item xs={12}>
              <a href={spotifyLink} target='_blank' rel='noreferrer'>
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
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant='body2'
                gutterBottom
                style={{ textAlign: 'center', margin: '2em' }}
              >
                Mi estas programisto kaj mi skribas ĉi tiun blogon por ekzerci
                min en Esperanto. Ankaŭ mi provas lerni novaj teĥnologioj de la
                interreto.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
