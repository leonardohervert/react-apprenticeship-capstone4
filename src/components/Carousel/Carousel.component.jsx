import React, { useEffect, useState } from "react";
import SwiperCore, {
  Autoplay,
  Controller,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.css";
import "./Carousel.styles.css";
import { useFeaturedBanners } from "../../utils/hooks/useFeaturedBanners";

SwiperCore.use([Pagination, Navigation, Controller, Thumbs, Autoplay]);
const Carousel = ({ ...props }) => {
  const { data, isLoading } = useFeaturedBanners();

  useEffect(() => {
    if (data) {
      console.log(data?.results?.length);
    }
  }, [data]);

  return (
    <div className="swiper-container">
      <Swiper
        className="swiper-carousel"
        centeredSlides
        id="main"
        autoplay
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data?.results &&
          data.results.map((x) => {
            return (
              <SwiperSlide key={`c-${x.id}`} className="swiper-slide">
                <img alt={"text"} src={x.data.main_image.url} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default Carousel;
