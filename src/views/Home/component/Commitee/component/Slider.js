import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper";
import "./style.scss";
import { useT } from "../../../../../utils/useT";
SwiperCore.use([Navigation]);

export default function Slider({
  slideList,
  view = 3,
  spaceBetween = 50,
  className,
}) {
  const { t, lang } = useT();
  return (
    <div className="slider">
      <Swiper
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
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: view,
            spaceBetween: 70,
          },
        }}
      >
        {slideList.map((data, idx) => (
          <SwiperSlide>
            <div className="card-box">
              <div className="commit-card">
                <div className="img-box">
                  {data.toUrl !== "" ?
                    (
                      <a href={data.toUrl} className="img_url" target="_blank" rel="noreferrer">
                        <img src={data.img} alt={data.name[lang]} />
                      </a>
                    ) : <img src={data.img} alt={data.name[lang]} />
                  }
                </div>
                <div className="name">{
                  data.toUrl !== "" ?
                    (
                      <a href={data.toUrl} className="img_url" target="_blank" rel="noreferrer">
                        {data.name[lang]}
                      </a>
                    ) : data.name[lang]
                }
                </div>
                <div className="proffesion">
                  {data.profession[lang]}
                </div>
                <div className="country">
                  {data.country[lang]}
                </div>
                {data.job[lang] !== "" ?
                  (<div className="job">
                    {data.job[lang]}
                  </div>) : null
                }
                {data.degree[lang] !== "" ? (
                  <div className="degree">
                    {data.degree[lang]}
                  </div>
                ) : null
                }
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
