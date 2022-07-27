import type { AppProps } from 'next/app';
import { RecoilRoot } from "recoil";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Layout from '../components/layout';
import ConfirmModal from '../components/modal/Confirm';
import { lightTheme } from '../styles/theme';

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  line-height: 1.6;
  font-size: 18px;
}

html {
  height: 100%;
}

body {
  height: 100%;
  background: #fafafa;
  & > div {
    height: 100%;
  }
}

* {
  box-sizing: border-box;
}

a {
  color: black;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

h1,h2,h3,h4,h5,h6 {
  margin: 0;
}

button {
  background-color: white;
  cursor: pointer;
}

ul, ol {
  padding: 0;
}
li {
  list-style: none;
}
`;

const Main = styled.main`
  padding: 40px 0;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <RecoilRoot>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <ConfirmModal />
      <Layout>
        <Main>
          <Component {...pageProps} />
        </Main>
      </Layout>
  </ThemeProvider>
  </RecoilRoot>
  )
}

export default MyApp
