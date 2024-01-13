import { ThemeContext } from "@/context";
import { useContext, useEffect, useState } from "react";

export const useSlider = (images: { url: string; alt: string }[]) => {
  const [currentImage, setCurrentImage] = useState(0);
  const imageCount = images.length;
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % imageCount);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImage, imageCount]);

  return {
    currentImage,
    imageCount,
    theme,
    setCurrentImage,
  };
};
