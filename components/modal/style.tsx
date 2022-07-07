import { ReactNode } from "react";
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
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Background = styled.div<{isAnimated: boolean, isOpen: boolean}>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(200, 200, 200, 0.9);
  overflow-y: auto;
  overflow-x: hidden;
  opacity: 0;
  visibility: hidden;
  transition: .2s;
  animation-duration: .2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeIn};
  ${
      props => props.isOpen ? css`
        visibility: visible;
      ` : css`
        animation-name: ${fadeOut};
      `
  }
  &:focus {
    outline: none;
  }
`;

const Container = styled.div`
  position: relative;
  width: 1000px;
  height: 1000px;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  transform: translateY(10px);
  animation-duration: .2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  animation-name: ${slideUp};
`;

Modal.Background = Background;
Modal.Container = Container;

export default Modal;
