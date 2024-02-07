import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useT } from "../../../../../utils/useT";
import SwiperCore, { Navigation, Autoplay } from "swiper";
SwiperCore.use([Navigation, Autoplay]);


export default function Slider({
  slideList,
  view = 3,
  spaceBetween = 70,
  className,
}) {

const {t, lang} = useT();

  return (
    <>
      <Swiper
        // autoplay={{
        //   "delay": 2500,
        //   "disableOnInteraction": false
        // }}
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
            spaceBetween: 70,
          },
        }}
      >
        {slideList.map((data, idx) => (
          <SwiperSlide key={idx}>
            <div className="card-box">
              <div className="papers-card position">
                <div className="img-box">
                  <img src={data.imgUrl} alt="" />
                </div>
                <div className="card-footer" style={{ background: data.bg }}>
                  <div className="title">{data.title[lang]}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
