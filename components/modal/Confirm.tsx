import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Portal, confirmModalRootId } from "./Portal";
import ModalStyle from "./style";
import { confirmState } from "../../recoil/confirm";
import useConfirm from "../../hooks/useConfirm";

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
    console.log('confirm', state);
    if (state) {
      setIsOpen(true);
      setIsAnimated(true);
    }
  }, [state]);

  const handleSuccess = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsAnimated(false);
      if(state?.onSuccess) state.onSuccess();
      hide();
    }, 300);
  }
  const handleCancel = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsAnimated(false);
      if(state?.onCancel) state.onCancel();
      hide();
    }, 300);
  }

  if (!state) return null;

  return (
    <Portal rootId={confirmModalRootId}>
      <ModalStyle>
        <ModalStyle.Background role="confirm-modal" isAnimated={isAnimated} isOpen={isOpen}>
          <ModalStyle.Container isOpen={isOpen} size={200}>
            <h3>{state?.message}</h3>
            <ModalStyle.ButtonWrap>
              {state?.cancelText ?
                <ModalStyle.SuccessButton type="button" onClick={handleCancel}>
                  {state.cancelText}
                </ModalStyle.SuccessButton>
                : null}
              {state?.successText ?
                <ModalStyle.SuccessButton type="button" onClick={handleSuccess}>
                  {state.successText}
                </ModalStyle.SuccessButton>
                : null}
            </ModalStyle.ButtonWrap>
          </ModalStyle.Container>
        </ModalStyle.Background>
      </ModalStyle>
    </Portal>
  );
}

export default Confirm;
