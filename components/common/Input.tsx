import {InputHTMLAttributes} from "react";
import styled, {css} from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  prepend?: ReactNode;
  append?: ReactNode;
  type?: "small";
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

const Label = styled.label`
  margin: 5px 0;
  padding: 0 5px;
  font-size: 14px;
`;

const Error = styled.div`
  margin: 5px 0 10px;
  color: ${props => props.theme.warningColor};
  font-size: 12px;
`;

const Input = ({prepend, append, ...props}: Props) => {
    return (
    <>
      {prepend}
      <StyledInput {...props} />
      {append}
    </>
    )
};

Input.Label = Label;
Input.Error = Error;

export {Input};
