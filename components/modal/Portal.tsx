import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

// we’re directly mutating the DOM 
// and want the effect to run synchronously before the DOM is repainted, 
// so it makes more sense to use the useLayoutEffect Hook.

type Props = {
  children: React.ReactNode,
  rootId: string,
}

export const defaultModalRootId = 'modalRoot';
export const confirmModalRootId = 'confirmModalRoot';

export const createRootContainer = (rootId: string) : HTMLElement => {
  const root = document.createElement('div');
  root.setAttribute('id', rootId);
  document.body.appendChild(root);
  return root;
};

export const Portal = ({children, rootId}: Props) => {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    let root = document.getElementById(rootId);
    let systemCreated = false;
    if (!root) {
        systemCreated = true;
        root = createRootContainer(rootId);
    }
    setRootElement(root);

    return () => {
      if (systemCreated && root?.parentNode) {
        root.parentNode.removeChild(root);
      }
    };
  }, [rootId]);

  if (rootElement === null) return null;
  return createPortal(children, rootElement);
};
