import { Fragment, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { LIGHT_THEME } from "@/config";
import { ThemeContext } from "@/context";

export const Slider = ({
  images,
}: {
  images: { url: string; alt: string }[];
}) => {
  const { theme } = useContext(ThemeContext);
  const s = styles(theme);

  return (
    <Fragment>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        navigation
        className={s.swiper}
      >
        {images.map(({ alt, url }) => (
          <SwiperSlide
            key={`project-page-${alt}`}
            className="!h-[240px] md:!h-[420px]  lg:!h-[640px]  xl:!h-[600px] 2xl:!h-[960px]"
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

const styles = (theme: string) => ({
  swiper: `rounded-md shadow-header  ${
    theme === LIGHT_THEME ? "shadow-slate-950" : "shadow-gray-600"
  }`,
});
