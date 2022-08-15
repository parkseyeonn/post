import { ReactNode, useState, useEffect, useRef } from "react";
import { Portal, defaultModalRootId } from "./Portal";
import ModalStyle from "./style";
import useClickOutside from "../../hooks/useClickOutside";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

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
  const modalRef = useRef(null);
  const [isAnimated, setIsAnimated] = useState<boolean>(false);

  useClickOutside({
    ref: modalRef,
    callback: handleClose
  });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isOpen) {
      setIsAnimated(true);
    } else if (isAnimated) {
      timeout = setTimeout(() => {
        setIsAnimated(false);
      }, 300);
    }
    return () => {
      if (timeout !== undefined) {
        clearTimeout(timeout);
      }
    }
  }, [isOpen]);

  if (!(isOpen || isAnimated)) return null;

  return (
    <Portal rootId={defaultModalRootId}>
    <ModalStyle>
      <ModalStyle.Background isAnimated={isAnimated} isOpen={isOpen}>
        <ModalStyle.Container ref={modalRef} isOpen={isOpen} size={size ? size : null}>
          <ModalStyle.Header>
            {title ? <ModalStyle.Title>{title}</ModalStyle.Title> : null}
            <ModalStyle.CloseButton aria-label="close" onClick={handleClose}>
              <FontAwesomeIcon icon={faClose} />
            </ModalStyle.CloseButton>
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
