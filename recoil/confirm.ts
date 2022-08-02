import {atom} from "recoil";
import {ModalProps} from "../components/modal/Confirm";

export const confirmState = atom<ModalProps | null>({
    key: "confirmState",
    default: null,
})
