import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { useT } from "../../../../../../utils/useT";
SwiperCore.use([Navigation, Autoplay]);

export default function Slider({
  slideList = [],
  view = 3,
  spaceBetween = 70,
  className,
}) {
  const { t, lang } = useT();
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
            spaceBetween: 70,
          },
        }}
      >
        {slideList.map((data, idx) => (
          <SwiperSlide key={idx}>
            <div className="card-box">
            <div className="keynote-card">
              <div className="img-box">
                {data.toUrl !== "" ?
                  (
                    <a href={data.toUrl} className="img_url" target="_blank" rel="noreferrer">
                      <img src={data.img} alt={data.name[lang]} />
                    </a>
                  ) : <img src={data.img} alt={data.name[lang]} />
                }
              </div>
              <div className="name">
                {data.toUrl !== "" ?
                  (
                    <a href={data.toUrl} className="img_url" target="_blank" rel="noreferrer">
                      {data.name[lang]}
                    </a>
                  ) : data.name[lang]
                }
              </div>
              <div className="country">({data.country[lang]})</div>
              <div className="degree">{data.degree[lang]}</div>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
