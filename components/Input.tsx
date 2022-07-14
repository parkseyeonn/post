import {InputHTMLAttributes} from 'react';
import styled, {css} from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
}

const StyledInput = styled.input`
    width: 100%;
    height: 50px;
    padding: 0 10px;
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 4px;
    box-shadow: ${props => props.theme.boxShadow};
    & + input {
      margin-top: 10px;
    }
    &:focus {
        outline: none;
        border-Color: ${props => props.theme.themeColor1}
    }
`;

export default function Input({...props}: Props) {
    return (
        <StyledInput {...props} />
    )
};
