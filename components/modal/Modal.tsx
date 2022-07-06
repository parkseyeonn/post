import { ReactNode } from "react";
import { Portal, defaultModalRootId } from "./Portal";
import ModalStyle from "./style";

export interface ModalProps {
  isOpen: boolean;
  children?: ReactNode;
  handleClose: () => void;
}

export const Modal = ({
  isOpen,
  children,
  handleClose
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Portal rootId={defaultModalRootId}>
      <ModalStyle.Background role="modal">
        <ModalStyle.Container>
          {children}
          <button onClick={handleClose}>
            close
          </button>
        </ModalStyle.Container>
      </ModalStyle.Background>
    </Portal>
  );
}