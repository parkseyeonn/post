import {HTMLAttributes} from "react";
import styled from "styled-components";

interface Props extends HTMLAttributes<HTMLDivElement> {
}

const StyledSkeleton = styled.div`
  display: inline-block;
  margin-top: 5px;
  background-color: #f6f6f6;
  border-radius: 6px;
`;

export function Skeleton(props: Props) {
  return (
    <StyledSkeleton {...props}/>
  )
}
