import React from "react";
import {createRoot} from "react-dom/client"; //todo what is this?
import {Confirm} from "./Confirm";
import {Portal, confirmModalRootId, createRootContainer} from "../Portal";  //todo what is this?

//todo 필요없는 option 지우기
type ClassNames = {
    container?: string;
    buttons?: string;
    confirmButton?: string;
    cancelButton?: string;
};

export type Options = {
    labels?: {
        confirmable: string;
        cancellable: string;
    }
    classNames?: ClassNames,
    closeOnOverlayClick?: boolean;
    render?: (
       message: string,
       onConfirm: () => void,
       onCancel: () => void,
    ) => Element, //todo what is this?
    children?: React.ReactNode,
};

export const confirm = async (
    message: string,
    options?: Options
): Promise<boolean> => {  //todo what is this?
    let element = document.getElementById(confirmModalRootId);
    if (!element) {
        element = createRootContainer(confirmModalRootId);
    }

    if (element) {
        const root = createRoot(element);  //todo what is this?
        return new Promise((resolve) => {
            const confirmModal = React.createElement(Confirm, {
                resolver: response => {
                    resolve(response);
                    root.unmount();
                },
                message,
                options,
            })  //todo what is this?
            // 포탈에 컨펌모달을 합성
            const PortalEl = React.createElement(
                Portal,
                { rootId: confirmModalRootId, children: confirmModal },
                confirmModal,
            )

            root.render(PortalEl)
        })
    }

    return new Promise(() => {})
};
