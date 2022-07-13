import { useState, useEffect } from "react";
import { useRecoilState } from 'recoil';
import { confirmState } from '../../recoil/confirm';
import useConfirm from '../../hooks/useConfirm';
import {Portal, confirmModalRootId} from "./Portal";
import ModalStyle from "./style";

export interface ModalProps {
  message: string;
  successText?: string;
  cancelText?: string;
  onSuccess?: () => void;
  onCancel?: () => void;
}

const Confirm = () => {

  const {hide} = useConfirm();
  const state = useRecoilState(confirmState)[0];
  const [isOpen, setIsOpen] = useState(state ? true : false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    console.log(state);
    if (state) {
      setIsOpen(true);
      setIsAnimated(true);
    } else {

    }
  }, [state]);

  const handleSuccess = () => {
    setIsAnimated(false);
    hide();
    if(state?.onSuccess) state.onSuccess();
  }
  const handleCancel = () => {
    setIsAnimated(false);
    hide();
    if(state?.onCancel) state.onCancel();
  }

  if (!state) return null;

  return (
    <Portal rootId={confirmModalRootId}>
      <ModalStyle>
        <ModalStyle.Background role="confirm-modal" isAnimated={isAnimated} isOpen={isOpen}>
          <ModalStyle.Container isOpen={isOpen} size={300}>
            <h3>{state.message}</h3>
            <div>
              {state.cancelText ?
                <button type="button" onClick={handleCancel}>
                  {state.cancelText}
                </button>
                : null}
              {state.successText ?
                <button type="button" onClick={handleSuccess}>
                  {state.successText}
                </button>
                : null}
            </div>
          </ModalStyle.Container>
        </ModalStyle.Background>
      </ModalStyle>
    </Portal>
  );
}

export default Confirm;
