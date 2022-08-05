import { ReactNode, forwardRef } from "react";
import styled, {css, keyframes} from "styled-components";

type LayoutProps = {
  children?: ReactNode;
};

const Modal = ({children}: LayoutProps) => (
  <div>{children}</div>
);

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(5px);
  }
`;

const Background = styled.div<{isAnimated: boolean, isOpen: boolean}>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: ${props => props.theme.modalZIndex};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(200, 200, 200, 0.9);
  overflow-y: auto;
  overflow-x: hidden;
  opacity: 0;
  transition: .1s;
  animation-duration: .2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeIn};
  ${
      props => props.isOpen ? css`
        animation-delay: .1s;
      ` : css`
        animation-name: ${fadeOut};
      `
  }
  &:focus {
    outline: none;
  }
`;

const Container = styled.div<{isOpen: boolean , size: number | null}>`
  position: relative;
  width: ${props => props.size ? `${props.size}px` : '1000px'};
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: ${props => props.theme.boxShadow};
  transform: translateY(10px);
  animation-duration: .1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-name: ${slideUp};
  ${
    props => props.isOpen ? null : css`
      animation-name: ${slideDown};
    `
  }
`;

const Title = styled.h3`
  font-size: ${props => props.theme.modalTitleFontSize}
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const CloseButton = styled.button`
  margin-left: auto;
  padding: 5px;
  transition: .2s;
  font-size: 30px;
  border: 0;
  &:hover {
    opacity: .8;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  & > button {
    flex: 1;
  }
`;

const SuccessButton = styled.button`
  border: 0;
  color: ${props => props.theme.themeColor1};
  font-weight: bold;
`;

const Body = styled.div`
`;

Modal.Background = Background;
Modal.Container = Container;
Modal.Title = Title;
Modal.Header = Header;
Modal.CloseButton = CloseButton;
Modal.Body = Body;
Modal.ButtonWrap = ButtonWrap;
Modal.SuccessButton = SuccessButton;

export default Modal;
