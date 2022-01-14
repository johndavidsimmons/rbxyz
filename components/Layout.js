import Header from './Header';
import Nav from './Nav';
import Grid from '@mui/material/Grid';

const Layout = ({ children }) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Nav />
        </Grid>
        <Grid item xs={3}>
          <Header />
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
