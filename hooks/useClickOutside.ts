import {useEffect, RefObject, MouseEvent} from 'react';

interface Props {
  ref: RefObject<HTMLDivElement>;
  callback: () => void;
}

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
}

export default function useClickOutside({ref, callback}: Props) {
  useEffect(() => {
    const handleMouseDown = (e: HTMLElementEvent<HTMLElement>) => {
      if (ref && ref.current && ref.current.contains(e.target as HTMLElement)) {

      }
    };

    window.addEventListener('mousedown', handleMouseDown as EventListener);

    return () => window.removeEventListener('mousedown', handleMouseDown as EventListener)
  }, []);
}
