import React, { useEffect, useState } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.css";
import "./Carousel.styles.css";
import { useFeaturedBanners } from "../../utils/hooks/useFeaturedBanners";

const CarouselMenu = ({ ...props }) => {
  const { content } = props;
  const { data, isLoading } = useFeaturedBanners();

  useEffect(() => {
    if (data) {
      console.log(data?.results?.length);
    }
  }, [data]);

  return (
    <React.Fragment>
      <div>
        <Swiper id="main">
          {data?.results &&
            data.results.map((x) => {
              return (
                <SwiperSlide key={`c-${x.id}`}>
                  <img alt={"text"} src={x.data.main_image.url} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </React.Fragment>
  );
};

export default CarouselMenu;
