import Image from "next/image";
import { useState } from "react";

export const Slider = ({
  images,
}: {
  images: { url: string; alt: string }[];
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const imageCount = images.length;

  return (
    <div className="relative mx-auto w-64 h-36 sm:h-56 sm:w-96 lg:w-[560px] lg:h-80 overflow-hidden">
      <div
        className="absolute flex w-full h-full"
        style={{
          transform: "translateX(-" + currentImage * 100 + "%)",
        }}
      >
        {images.map(({ alt, url }, index) => (
          <div
            key={`project-page-${alt}`}
            className={`inline flex-shrink-0 flex-grow-0 w-full h-full`}
          >
            <Image
              onClick={() => setCurrentImage((currentImage + 1) % imageCount)}
              alt={alt}
              src={url}
              height={640}
              width={640}
              className="w-full h-fullQ object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
