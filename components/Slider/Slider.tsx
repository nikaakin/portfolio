import { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

export const Slider = ({
  images,
}: {
  images: { url: string; alt: string }[];
}) => {
  return (
    <Fragment>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        navigation
      >
        {images.map(({ alt, url }) => (
          <SwiperSlide
            key={`project-page-${alt}`}
            className="!h-[300px] md:!h-[420px]  lg:!h-[640px]  xl:!h-[600px] 2xl:!h-[960px]"
          >
            <img
              alt={alt}
              src={url}
              className="w-full h-full object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};
