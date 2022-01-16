import Layout from '../components/Layout';
import '../styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#2e3b55',
//     },
//   },
// });
// <ThemeProvider theme={theme}>wrap app</ThemeProvider>;
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
