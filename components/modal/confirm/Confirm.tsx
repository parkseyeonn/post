import { ReactNode, useState, useEffect } from "react";
import { Portal, defaultModalRootId } from "../Portal";
import { Options } from "./index";

//https://dahna.tistory.com/4?category=1014742
//https://github.com/serrexlabs/react-confirm-box
export interface ModalProps {
  message: string;
  resolver: (response: boolean) => void;
  options?: Options;
}

// isOpen || isAnimated -> show
export const Confirm = ({
  message,
  resolver,
  options,
}: ModalProps) => {
  const [isAnimated, setIsAnimated] = useState(false);

  const onConfirm = () => {
    setIsAnimated(false);
    resolver(true);
  }
  const onCancel = () => {
    setIsAnimated(false);
    resolver(false);
  }

  if (!isAnimated) return null;

  return (
    <div role="confirm-modal">
      <h3>{message}</h3>
      <div>{options?.children}</div>
      <div>
        <button type="button" onClick={onCancel}>
          취소
        </button>
        <button type="button" onClick={onConfirm}>
          확인
        </button>
      </div>
    </div>
  );
}
