import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import theme from '../assets/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
  }, []);

  return (
    <>
      <Head>
        <title>SCH</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
