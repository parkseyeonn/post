import {InputHTMLAttributes, ReactNode} from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  append?: ReactNode
}

const StyledWrap = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  & + .styled-wrap {
    margin-top: 10px;
  }
  input {
    padding: 0 40px 0 10px;
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 4px;
    &:focus{
      outline: none;
      border-Color: ${props => props.theme.themeColor1}   
    }
  }
`;

const Icon = styled.i`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  width: 40px;
  height: 40px;
  font-size: 24px;
`;

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

const Input = ({append, ...props}: Props) => {
    return append ? (
      <StyledWrap>
        <input {...props} />
        <Icon>{append}</Icon>
      </StyledWrap>
      ) : (
      <>
        <StyledInput {...props} />
      </>
      )
};

Input.Label = Label;
Input.Error = Error;

export {Input};
