import Layout from '../components/Layout';
import '../styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Script from 'next/script';
import { Partytown } from '@builder.io/partytown/react';


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
      <Partytown debug={process.env.PARTYTOWN_DEBUG == 'true' ? true : false} forward={['dataLayer.push']} loadScriptsOnMainThread={['https://www.youtube.com/iframe_api']} />
      <Script
        id='gtm'
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TSST4KJ');`,
        }}
        type="text/partytown"
      />
      <Script
      id="twitterpixel"
      dangerouslySetInnerHTML={{
        __html:`!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
        },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='uwt.js',
        a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
        twq('config','od5ij');`
      }}
      type="text/partytown"
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
