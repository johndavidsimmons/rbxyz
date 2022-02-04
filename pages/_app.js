import Layout from '../components/Layout';
import '../styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Script from 'next/script';

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
    <>
      <Script
        id='gtm'
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TSST4KJ');`,
        }}
      />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
