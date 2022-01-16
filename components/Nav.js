import Link from 'next/link';
import { useRouter } from 'next/router';
import navStyles from '../styles/Nav.module.scss';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export const Nav = () => {
  const router = useRouter();
  return (
    <>
      <Grid
        container
        spacing={0}
        style={{
          paddingTop: '20px',
          backgroundColor: '#2E3B55',
          color: 'white',
        }}
      >
        <Grid item xs={3} style={{ paddingLeft: '125px' }}>
          <Typography
            variant='h1'
            component='div'
            gutterBottom
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
            }}
          >
            <Link href={'/'}>RB.XYZ</Link>
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
// backgroundColor: '#2E3B55',
