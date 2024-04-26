import Image from "next/image";
import { LIGHT_THEME } from "@/config";
import { useSlider } from "./useSlider";
import { CircleButtonIcon, ArrowIcon, PlayNPauseIcon } from "@/Icons";
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
    isPlayButtonTextHidden,
    setIsPlayButtonTextHidden,
    imageRef,
    swipeLen,
    handleSwipe,
    handleSwipeStart,
    handleSwipeEnd,
  } = useSlider(images);

  return (
    <Fragment>
      <div
        className={`relative mx-auto w-72 h-40 sm:h-52 sm:w-96  xl:w-[780px] xl:h-[420px] overflow-hidden rounded-lg shadow-header
      ${theme === LIGHT_THEME ? "shadow-slate-900" : "shadow-gray-700 "}  
      `}
      >
        <div
          onClick={setCurrentImage.bind(
            null,
            currentImage - 1 < 0 ? imageCount - 1 : currentImage - 1
          )}
          className="z-20 cursor-pointer absolute h-full w-8 md:w-12 top-1/2 -translate-y-1/2 left-0 flex items-center justify-center rotate-180 hover:bg-black hover:bg-opacity-20"
        >
          <ArrowIcon />
        </div>
        <div
          onClick={setCurrentImage.bind(null, (currentImage + 1) % imageCount)}
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
            transform:
              "translateX(-" +
              (currentImage * 100 +
                (-swipeLen / (imageRef.current?.width || 0)) * 100) +
              "%)",
          }}
        >
          {images.map(({ alt, url }, index) => (
            <div
              key={`project-page-${alt}`}
              className="inline flex-shrink-0 flex-grow-0 w-full h-full"
            >
              <Image
                ref={index === 1 ? imageRef : null}
                onDragStart={handleSwipeStart}
                onDrag={handleSwipe}
                onDragEnd={handleSwipeEnd}
                onTouchMove={handleSwipe}
                onTouchStart={handleSwipeStart}
                onTouchEnd={handleSwipeEnd}
                priority
                alt={alt}
                src={url}
                height={640}
                width={640}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
      {window?.innerWidth > 768 && (
        <div
          className={`mb-5 cursor-pointer flex items-end w-44 md:w-52 py-1 md:px-5 px-4 md:py-2 mx-auto justify-between gap-2 mt-4 rounded bg-opacity-50 hover:bg-opacity-75 ${
            theme === LIGHT_THEME ? "bg-zinc-300" : "bg-black"
          }`}
          onClick={setTimerEnabled.bind(null, !timerEnabled)}
        >
          <span className="md:text-sm text-xs">
            Auto slide is{" "}
            <span
              className={`font-bold opacity-100 transition-opacity duration-200  ${
                !timerEnabled && "!opacity-0"
              } ${!isPlayButtonTextHidden && "hidden"}`}
              onTransitionEnd={() => setIsPlayButtonTextHidden(false)}
            >
              enabled
            </span>
            <span
              className={`font-bold opacity-100 transition-opacity duration-200 ${
                timerEnabled && "!opacity-0"
              } ${isPlayButtonTextHidden && "hidden"}`}
              onTransitionEnd={() => setIsPlayButtonTextHidden(true)}
            >
              disabled
            </span>
          </span>
          <div className="w-4 h-4 md:w-5 md:h-5 flex items-center">
            <PlayNPauseIcon isPlaying={timerEnabled} theme={theme} />
          </div>
        </div>
      )}
    </Fragment>
  );
};
