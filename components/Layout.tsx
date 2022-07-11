import { ReactNode } from "react"
import styled from "styled-components";

type LayoutProps = {
  children: ReactNode;
}

const LayoutStyle = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 10px;
`;

export default function Layout({children}: LayoutProps) {
  return (
    <LayoutStyle>
      {children}
    </LayoutStyle>
  )
}
