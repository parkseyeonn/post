import {InputHTMLAttributes} from 'react';
import styled, {css} from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  prepend?: ReactNode;
  append?: ReactNode;
  type?: 'small';
}

const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 4px;
    & + input {
      margin-top: 10px;
    }
    &:focus {
        outline: none;
        border-Color: ${props => props.theme.themeColor1}
    }
`;

export default function Input({prepend, append, ...props}: Props) {
    return (
    <>
      {prepend}
      <StyledInput {...props} />
      {append}
    </>
    )
};
