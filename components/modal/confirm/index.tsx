import React, {createElement} from "react";
import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client";
import {Confirm} from "./Confirm";
import {Portal, confirmModalRootId, createRootContainer} from "../Portal";

type ClassNames = {
    container?: string;
    buttons?: string;
    confirmButton?: string;
    cancelButton?: string;
};

export type Options = {
    classNames?: ClassNames;
    closeOnOverlayClick?: boolean;
    render?: (
       message: string,
       onConfirm: () => void,
       onCancel: () => void,
    ) => Element;
    children?: React.ReactNode;
};

export const confirm = async (
    message: string,
    options?: Options
): Promise<boolean> => {

    return new Promise((resolve) => {
       const confirmModal = createElement(Confirm, {
           resolver: response => {
               resolve(response);
               root.unmount();
           },
           message,
           options,
       });
       let element = document.getElementById(confirmModalRootId);
       if (!element) {
           const PortalEl = createElement(
               Portal,
               { rootId: confirmModalRootId },
               confirmModal,
           );
           console.log(PortalEl)
           ReactDOM.render(PortalEl, document.body);

           document.body.appendChild(PortalEl);
       } else {
         element = createRootContainer(confirmModalRootId);
       }
   })
};
