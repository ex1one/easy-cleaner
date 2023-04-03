import { useEffect, RefObject } from "react";

interface useRippleAnimationProps<T> {
  ref: RefObject<T>;
  config?: {
    size: number;
    color: string;
    duration: number;
  };
  styles: {
    isActive: string;
    style: string;
  };
}

export const useRippleAnimation = <T extends HTMLElement>({
  config = { size: 100, duration: 800, color: "#fff" },
  styles,
  ref,
}: useRippleAnimationProps<T>) => {
  const { color, duration, size } = config;

  useEffect(() => {
    const applyContainerProperties = () => {
      ref.current && ref.current.classList.add(styles.style);
    };

    const applyStyles = (e: MouseEvent) => {
      if (ref.current) {
        const { offsetX, offsetY } = e;
        const { style } = ref.current;
        const sizeOffSet = 50;

        style.setProperty("--effect-top", `${offsetY - sizeOffSet}px`);
        style.setProperty("--effect-left", `${offsetX - sizeOffSet}px`);
        style.setProperty("--effect-height", `${size}px`);
        style.setProperty("--effect-width", `${size}px`);
        style.setProperty("--effect-color", color);
        style.setProperty("--effect-duration", `${duration}ms`);
      }
    };

    const onClick = (e: MouseEvent) => {
      ref.current?.classList.remove(`${styles.isActive}`);
      applyStyles(e);
      ref.current?.classList.add(`${styles.isActive}`);
    };

    applyContainerProperties();

    ref.current?.addEventListener("mouseup", onClick);

    const cleanUpRef = ref.current;

    return () => cleanUpRef?.removeEventListener("mouseup", onClick);
  }, [color, duration, ref, size, styles]);
};
