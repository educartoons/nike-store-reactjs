import { useEffect } from "react";

export default function useClickOutside(
  ref: React.RefObject<HTMLElement> | null,
  callback: () => void
) {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref !== null) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener(
      "touchstart",
      handleClickOutside as EventListener
    );
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener(
        "touchstart",
        handleClickOutside as EventListener
      );
    };
  }, [ref, callback]);
}
