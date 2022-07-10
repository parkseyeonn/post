import styled, {css} from "styled-components";

// border button
// theme button
// border mini button
// theme mini button

type ButtonType = {
  width?: number;
  size?: 'normal' | 'mini';
  border?: boolean;
  color?: 'string';
  textColor?: 'string';
}

const Button = styled.button<ButtonType>`
  width: ${props => props.width ? `${props.width}px` : 'auto'};
  height: ${props => props.size ? props.theme.button[props.size]: null};
  line-height: ${props => props.size ? props.theme.button[props.size]: null};
  padding: 0 10px;
  border-radius: 10px;
  ${
    props => props.border ? css`
      border-color: ${props.color ?? props.theme.borderColor};
      border-width: 1px;
      background-color: white;
      color: ${props.color ?? props.theme.borderColor};
    ` : css`
      border: none;
      background-color ${props.color ?? props.theme.themeColor1};
      color: ${props.textColor ?? props.theme.white};
    `
  }
`;

export default Button;