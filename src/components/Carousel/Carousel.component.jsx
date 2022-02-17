import React from "react";
import { Autoplay, Pagination, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import Image from "../Image";
import "swiper/swiper-bundle.css";
import "./Carousel.styles.css";

import { useFeaturedCategories } from "../../utils/hooks/useFeaturedCategories";

const breakpoints = {
  640: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 5,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
};
const Carousel = () => {
  const { data, isLoading } = useFeaturedCategories();

  return (
    <Swiper
      autoplay
      pagination={{ clickable: true }}
      freeMode
      modules={[Pagination, FreeMode, Autoplay]}
      breakpoints={breakpoints}
    >
      {!isLoading &&
        data.results &&
        data.results.map((x) => {
          return (
            <SwiperSlide key={x.id} className="swiper-slide">
              <Image alt={x.data.title} src={x.data.main_image.url} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default Carousel;
