import React from "react";
import SectionTitle from "../../../../components/SectionTitle";
import { images } from "../../../../constants/images";
import Slider from "./component/Slider";
import { useT } from "../../../../utils/useT";

const List = [
  {
    // link: "https://www.tuproqtahlil.uz/",
    img: images.Soil,
  },
  {
    img: images.Agrouz,
  },
  {
    img: "/assets/img/Akiscopy.png"
  },
  {
    img: images.Food,
  },
  {
    img: images.Ifoda,
  },
  {
    img: images.Nuu,
  },
  {
    img: images.Tdau,
  },
  {
    img: images.Tokyo,
  },
  {
    img: images.Zagreb,
  },
  {
    img: images.Icarda,
  },
  {
    img: images.Minstry,
  },
];

function Footer() {
  const {t} = useT();
  return (
    <div className="papers">
      <SectionTitle id="contribution" title={t("partners")} />
      <Slider slideList={List} view={6} spaceBetween={30} />
    </div>
  );
  
}

export default Footer;
