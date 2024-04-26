import { ThemeContext } from "@/context";
import { DragEvent, useContext, useEffect, useRef, useState } from "react";

export const useSlider = (images: { url: string; alt: string }[]) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [timerEnabled, setTimerEnabled] = useState(true);
  const [isPlayButtonTextHidden, setIsPlayButtonTextHidden] = useState(true);
  const [dragStart, setDragStart] = useState(0);
  const [dragLen, setDragLen] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const imageCount = images.length;
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (!timerEnabled || window?.innerWidth < 768) return;
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % imageCount);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImage, imageCount, timerEnabled]);

  const handleDragStart = (e: DragEvent<HTMLImageElement>) =>
    setDragStart(e.screenX);

  const handleDrag = (e: DragEvent<HTMLImageElement>) =>
    setDragLen(e.screenX - dragStart);

  const handleDragEnd = (e: DragEvent<HTMLImageElement>) => {
    if (e.screenX === dragStart) return;

    if (Math.abs(e.screenX - dragStart) / imageRef.current!.width > 0.2) {
      if (e.screenX - dragStart > 0) {
        setCurrentImage(
          currentImage - 1 < 0 ? imageCount - 1 : currentImage - 1
        );
      } else {
        setCurrentImage((currentImage + 1) % imageCount);
      }
    }
    setDragStart(0);
    setDragLen(0);
  };

  return {
    currentImage,
    imageCount,
    theme,
    setCurrentImage,
    timerEnabled,
    setTimerEnabled,
    isPlayButtonTextHidden,
    setIsPlayButtonTextHidden,
    imageRef,
    dragLen,
    handleDrag,
    handleDragStart,
    handleDragEnd,
  };
};
