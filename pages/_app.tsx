import type { AppProps } from 'next/app';
import { ThemeProvider } from "styled-components";
import Layout from '../components/Layout';
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
