import { ReactNode } from "react"
import styled from "styled-components";
import Header from './Header';
import NavBar from './NavBar';

type LayoutProps = {
  children: ReactNode;
}

const LayoutStyle = styled.div`
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
  padding: 0 50px;
  background: #fff;
`;

export default function Layout({children}: LayoutProps) {
  return (
    <LayoutStyle>
      <Header />
      <NavBar />
      {children}
    </LayoutStyle>
  )
}
