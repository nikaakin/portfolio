import { ThemeContext } from "@/context";
import { useContext, useEffect, useState } from "react";

export const useSlider = (images: { url: string; alt: string }[]) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [timerEnabled, setTimerEnabled] = useState(true);
  const [isPlayButtonTextHidden, setIsPlayButtonTextHidden] = useState(true);
  const imageCount = images.length;
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (!timerEnabled) return;
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % imageCount);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImage, imageCount, timerEnabled]);

  return {
    currentImage,
    imageCount,
    theme,
    setCurrentImage,
    timerEnabled,
    setTimerEnabled,
    isPlayButtonTextHidden,
    setIsPlayButtonTextHidden,
  };
};
