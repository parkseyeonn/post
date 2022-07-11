import { useState, useEffect } from "react";
import { Options } from "./index";

export interface ModalProps {
  message: string;
  resolver: (response: boolean) => void;
  options?: Options;
}

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
