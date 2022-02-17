import React from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import Image from "../Image";
import "swiper/swiper-bundle.css";

import { useFeaturedBanners } from "../../utils/hooks/useFeaturedBanners";

const Banner = () => {
  const { data, isLoading } = useFeaturedBanners();

  return (
    <Swiper
      autoplay
      navigation
      modules={[Navigation, Autoplay]}
      centeredSlides={true}
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

export default Banner;
