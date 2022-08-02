import {useEffect, RefObject, MouseEvent, forwardRef} from "react";

interface Props {
  ref: RefObject<HTMLElement>;
  callback: () => void;
}

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
}

export default function useClickOutside({ref, callback}: Props) {
  useEffect(() => {
    const handleMouseDown = (e: HTMLElementEvent<HTMLElement>) => {
      if (ref && ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };

    window.addEventListener("mousedown", handleMouseDown as EventListener);

    return () => window.removeEventListener("mousedown", handleMouseDown as EventListener)
  }, []);
}
