import type { AppProps } from 'next/app';
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import Header from '../components/Header';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';
import ConfirmModal from '../components/modal/Confirm';
import { lightTheme } from '../styles/theme';
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <RecoilRoot>
    <ThemeProvider theme={lightTheme}>
      <ConfirmModal />
      <Layout>
        <Header />
        <NavBar />
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
  </ThemeProvider>
  </RecoilRoot>
  )
}

export default MyApp
