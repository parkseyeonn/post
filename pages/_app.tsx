import type { AppProps } from 'next/app';
import { ThemeProvider } from "styled-components";
import Header from '../components/Header';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import { lightTheme } from '../styles/theme';
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Layout>
        <Header />
        <NavBar />
        <Component {...pageProps} />
      </Layout>
  </ThemeProvider>
  )
}

export default MyApp
