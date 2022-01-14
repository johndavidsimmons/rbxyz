import Link from 'next/link';
import { useRouter } from 'next/router';
import navStyles from '../styles/Nav.module.scss';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export const Nav = () => {
  const router = useRouter();
  return (
    <>
      <Grid container spacing={2} style={{ paddingTop: '1em' }}>
        <Grid item xs={3} style={{ paddingLeft: '7%', paddingBottom: '1em' }}>
          <Typography
            variant='h1'
            component='div'
            gutterBottom
            style={{
              fontSize: '3em',
              fontWeight: 'bold',
            }}
          >
            <Link href={'/'}>RB.XYZ</Link>
          </Typography>
          <Typography
            variant='body2'
            gutterBottom
            style={{ marginTop: '-1em' }}
          >
            My random thoughts about Music
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <nav className={navStyles.nav}>
            <ul>
              <li>
                <Link href='/'>
                  <a className={router.pathname == '/' ? navStyles.active : ''}>
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href='/topten'>
                  <a
                    className={
                      router.pathname == '/topten' ? navStyles.active : ''
                    }
                  >
                    Top 10
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </Grid>
      </Grid>
    </>
  );
};

export default Nav;
