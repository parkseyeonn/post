import {DivHTMLAttributes} from 'react';
import styled, {css} from 'styled-components';

interface Props extends DivHTMLAttributes<HTMLDivElement> {
  type?: 't1' | 't2';
}

const StyledTitle = styled.div<Props>`
  font-weight: bold;
  ${props =>
    props.type === 't1' &&
    css`
      font-size: 30px;
    `
  }
  ${props =>
    props.type === 't2' &&
    css`
      font-size: 24px;
    `
  }
`;

export default function Title({children, ...props}: Props) {
  return (
    <StyledTitle {...props}>
    {children}
    </StyledTitle>
  )
}
