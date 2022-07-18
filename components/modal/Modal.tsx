import { ReactNode, useState, useEffect } from "react";
import { Portal, defaultModalRootId } from "./Portal";
import ModalStyle from "./style";

export interface ModalProps {
  isOpen: boolean;
  title?: string;
  children?: ReactNode;
  handleClose: () => void;
  size?: number;
}

// isOpen || isAnimated -> show
export const Modal = ({
  isOpen,
  title,
  children,
  handleClose,
  size,
}: ModalProps) => {
  const [isAnimated, setIsAnimated] = useState<boolean>(false);

  useEffect(() => {
    console.log(isOpen)
    if (isOpen) {
      let timeout: NodeJS.Timeout;
      if (isOpen) {
        setIsAnimated(isOpen);
      } else {
        timeout = setTimeout(() => {
          setIsAnimated(isOpen);
        }, 300);
      }
      return () => {
        if (timeout !== undefined) {
          clearTimeout(timeout);
        }
      }
    }
  }, [isOpen]);

  if (!(isOpen || isAnimated)) return null;

  return (
    <Portal rootId={defaultModalRootId}>
    <ModalStyle>
      <ModalStyle.Background role="modal" isAnimated={isAnimated} isOpen={isOpen}>
        <ModalStyle.Container isOpen={isOpen} size={size ? size : null}>
          <ModalStyle.Header>
            {title ? <ModalStyle.Title>{title}</ModalStyle.Title> : null}
            <ModalStyle.CloseButton aria-label="close" onClick={handleClose}>x</ModalStyle.CloseButton>
          </ModalStyle.Header>
          <ModalStyle.Body>
          {children}
          </ModalStyle.Body>
        </ModalStyle.Container>
      </ModalStyle.Background>
    </ModalStyle>
    </Portal>
  );
}
