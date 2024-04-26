import { ThemeContext } from "@/context";
import {
  DragEvent,
  TouchEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

export const useSlider = (images: { url: string; alt: string }[]) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [timerEnabled, setTimerEnabled] = useState(true);
  const [isPlayButtonTextHidden, setIsPlayButtonTextHidden] = useState(true);
  const [swipeStart, setSwipeStart] = useState(0);
  const [swipeLen, setSwipeLen] = useState(0);
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

  const handleSwipeStart = (
    e: DragEvent<HTMLImageElement> | TouchEvent<HTMLImageElement>
  ) => {
    if ((e as TouchEvent<HTMLImageElement>).touches) {
      e = e as TouchEvent<HTMLImageElement>;
      setSwipeStart(e.touches[0].clientX);
    } else {
      e = e as DragEvent<HTMLImageElement>;
      const dragImg = new Image();
      // dragImg.style.width = "100px";
      // document.body.appendChild(dragImg);
      dragImg.src =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
      e.dataTransfer.setDragImage(dragImg, 0, 0);
      setSwipeStart(e.screenX);
    }
  };

  const handleSwipe = (
    e: DragEvent<HTMLImageElement> | TouchEvent<HTMLImageElement>
  ) => {
    if ((e as TouchEvent<HTMLImageElement>).touches) {
      e = e as TouchEvent<HTMLImageElement>;
      setSwipeLen(e.touches[0].clientX - swipeStart);
    } else {
      e = e as DragEvent<HTMLImageElement>;
      setSwipeLen(e.screenX - swipeStart);
    }
  };

  const handleSwipeEnd = (
    e: DragEvent<HTMLImageElement> | TouchEvent<HTMLImageElement>
  ) => {
    let x: number;

    if ((e as TouchEvent<HTMLImageElement>).touches) {
      e = e as TouchEvent<HTMLImageElement>;
      x = e.changedTouches[0].clientX;
    } else {
      e = e as DragEvent<HTMLImageElement>;
      x = e.screenX;
    }

    if (x === swipeStart) return;

    if (Math.abs(x - swipeStart) / imageRef.current!.width > 0.2) {
      if (x - swipeStart > 0) {
        setCurrentImage(
          currentImage - 1 < 0 ? imageCount - 1 : currentImage - 1
        );
      } else {
        setCurrentImage((currentImage + 1) % imageCount);
      }
    }

    setSwipeStart(0);
    setSwipeLen(0);
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
    swipeLen,
    handleSwipe,
    handleSwipeStart,
    handleSwipeEnd,
  };
};
