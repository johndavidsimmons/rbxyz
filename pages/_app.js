import Layout from '../components/Layout';
import '../styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e3b55',
    },
    secondary: {
      main: '#1DB954',
    },
  },
});

theme.typography.h1 = {
  // mobile here
  [theme.breakpoints.up('md')]: {
    // desktop here
    fontSize: '2.5rem',
  },
};

theme.typography.h2 = {
  color: theme.palette.primary.main,
  fontSize: '2rem',
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
