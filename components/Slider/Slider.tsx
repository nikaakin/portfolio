import { LIGHT_THEME } from "@/config";
import Image from "next/image";
import { useSlider } from "./useSlider";
import { CircleButtonIcon, ArrowIcon } from "@/Icons";
import { Fragment } from "react";

export const Slider = ({
  images,
}: {
  images: { url: string; alt: string }[];
}) => {
  const {
    currentImage,
    imageCount,
    setCurrentImage,
    theme,
    timerEnabled,
    setTimerEnabled,
  } = useSlider(images);

  return (
    <Fragment>
      <div
        className={`relative mx-auto w-52 h-28 sm:h-52 sm:w-96  xl:w-[780px] xl:h-[420px] overflow-hidden rounded-lg shadow-header
      ${theme === LIGHT_THEME ? "shadow-slate-900" : "shadow-gray-700 "}  
      `}
      >
        <div
          onClick={() =>
            setCurrentImage(
              currentImage - 1 < 0 ? imageCount - 1 : currentImage - 1
            )
          }
          className="z-20 cursor-pointer absolute h-full w-8 md:w-12 top-1/2 -translate-y-1/2 left-0 flex items-center justify-center rotate-180 hover:bg-black hover:bg-opacity-20"
        >
          <ArrowIcon />
        </div>
        <div
          onClick={() => setCurrentImage((currentImage + 1) % imageCount)}
          className="z-20  cursor-pointer absolute h-full w-8 md:w-12 top-1/2 -translate-y-1/2 right-0 flex items-center justify-center hover:bg-black hover:bg-opacity-20"
        >
          <ArrowIcon />
        </div>
        <div className="z-10 absolute flex w-full h-4 md:h-8 bottom-0 left-0 justify-center items-center gap-1">
          {images.map((_, index) => (
            <div
              key={`circle-button-${index}`}
              onClick={setCurrentImage.bind(null, index)}
              className="h-2 w-2 md:h-4 md:w-4 hover:scale-110 transition-transform cursor-pointer"
            >
              <CircleButtonIcon selected={index === currentImage} />
            </div>
          ))}
        </div>
        <div
          className="absolute flex w-full h-full transition-transform"
          style={{
            transform: "translateX(-" + currentImage * 100 + "%)",
          }}
        >
          {images.map(({ alt, url }) => (
            <div
              key={`project-page-${alt}`}
              className="inline flex-shrink-0 flex-grow-0 w-full h-full"
              unselectable="on"
            >
              <Image
                unselectable="on"
                alt={alt}
                src={url}
                height={640}
                width={640}
                className="unselectable w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className={``}
        onClick={setTimerEnabled.bind(null, !timerEnabled)}
      >
        {timerEnabled ? "Disable auto slide" : "Enable auto slide"}
      </button>
    </Fragment>
  );
};
