import { useRecoilState } from 'recoil';
import { confirmState } from '../recoil/confirm';
import { ModalProps } from '../components/modal/Confirm';

export default function useConfirm() {
    const [confirm, setConfirm] = useRecoilState(confirmState);

    const show = ({ message, successText = '확인', cancelText, onSuccess, onCancel = hide }: ModalProps) => {
        setConfirm({
            message,
            successText,
            cancelText,
            onSuccess,
            onCancel,
        });
    };

    const hide = () => {
        setConfirm(null);
    };

    return {
        confirm,
        setConfirm,
        show,
        hide
    };
}
