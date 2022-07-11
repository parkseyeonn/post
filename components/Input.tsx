import styled, {css} from "styled-components";

const Input = styled.input`
    width: 100%;
    height: 50px;
    padding: 0 10px;
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 4px;
    box-shadow: ${props => props.theme.boxShadow};
    & + input {
      margin-top: 10px;
    }
`;

export default Input;
