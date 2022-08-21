import {HTMLAttributes} from "react";
import styled from "styled-components";

interface Props extends HTMLAttributes<HTMLElement> {
}

export const StyledFeedList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

export function FeedList({children, ...props}: Props) {
  return (
    <StyledFeedList {...props}>
    {children}
    </StyledFeedList>
  )
}
