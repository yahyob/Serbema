import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation, Autoplay } from "swiper";

SwiperCore.use([Navigation, Autoplay]);

export default function Slider({
  slideList = [],
  view = 3,
  spaceBetween = 50,
  className,
}) {
  return (
    <>
      <Swiper
        autoplay={{
          "delay": 2500,
          "disableOnInteraction": false
        }}
        slidesPerView={view}
        spaceBetween={spaceBetween}
        navigation={true}
        className={className}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: view,
            spaceBetween: 50,
          },
        }}
      >
        {slideList.map((data, idx) => (
          <SwiperSlide key={idx}
          >
            <div className="card-box">
              <div className="papers-card logo-link">
                <div className="img-box">
                  <a target="_blank" href={data.link} rel="noreferrer">
                    <img src={data.img} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
