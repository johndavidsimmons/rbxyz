import Header from './Header';
import Nav from './Nav';
import Grid from '@mui/material/Grid';
import MobileNav from '../components/MobileNav';
import { Typography } from '@mui/material';
import Image from 'next/image';
import headerStyles from '../styles/Header.module.scss';
import Button from '@mui/material/Button';
import { MobileHeader } from './MobileHeader';

const Layout = ({ children }) => {
  const spotifyLink =
    'https://open.spotify.com/user/johndavidsimmons?si=0d0593c4f6154e36';
  return (
    <>
      <Grid container spacing={0}>
        <Grid container spacing={0}>
          <Grid item xs={12} sx={{ display: { md: 'none' }, padding: '2.5em' }}>
            <MobileNav />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
          >
            <Nav />
          </Grid>
        </Grid>
        {/* navigation */}
        <Grid container spacing={0} direction='row' sx={{ paddingTop: '1em' }}>
          <Grid item xs={12} sx={{ display: { md: 'none' } }}>
            <Grid
              container
              spacing={0}
              direction='row'
              alignItems='center'
              justifyContent='center'
            >
              <MobileHeader />
            </Grid>
            <Grid item xs={12}>
              <div style={{ paddingTop: '1em' }}>{children}</div>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
          >
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Header />
              </Grid>
              <Grid item xs={9}>
                <div style={{ padding: '1em' }}>{children}</div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>{' '}
      {/* main */}
    </>
  );
};

export default Layout;

{
  /* <Grid item xs={3} style={{ border: '1px dotted red' }}>
<Header />
</Grid>
<Grid item xs={9} style={{ border: '1px dotted red' }}>
{children}
</Grid> */
}

{
  /* <Image
              className={headerStyles.profile}
              src='/images/profile.png'
              width='100px'
              height='100px'
              alt='profile picture'
            />
            <Typography variant='subtitle1' gutterBottom component='div'>
              My random thoughts about music
            </Typography> */
}

// direction='column'
// alignItems='center'
// justifyContent='center'
