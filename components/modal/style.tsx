import { ReactNode } from "react";
import styled from "styled-components";

type LayoutProps = {
  children?: ReactNode;
};

const Modal = ({children}: LayoutProps) => (
  <div>{children}</div>
);

const Background = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-contents: center;
  background-color: rgba(111, 111, 111, .9);
  overflow-y: auto;
  overflow-x: hidden;
  visibility: none;
  opacity: 0;
  transition: .2s;
  &:focus {
    outline: none;
  }
`;

const Container = styled.div`
  position: relative;
  width: 1000px;
  height: 1000px;
  backgroundColor: white;
`;

Modal.Background = Background;
Modal.Container = Container;

export default Modal;