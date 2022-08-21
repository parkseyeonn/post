import {HTMLAttributes, ReactNode} from "react";
import styled, {css} from "styled-components";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  type?: "t1" | "t2";
}

const StyledTitle = styled.div<Props>`
  font-size: 16px;
  font-weight: bold;
  word-break: keep-all;
  ${props =>
    props.type === "t1" &&
    css`
      font-size: 20px;
    `
  }
  ${props =>
    props.type === "t2" &&
    css`
      font-size: 16px;
    `
  }
`;

export function Title({children, ...props}: Props) {
  return (
    <StyledTitle {...props}>
    {children}
    </StyledTitle>
  )
}
