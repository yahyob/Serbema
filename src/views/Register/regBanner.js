import React from "react";
import { useT } from "../../utils/useT"
function RegBanner() {
  const { lang } = useT()
  return (
    <div className="reg-banner">
      <img src={`/assets/img/banner${lang === "en" ? ".png" : lang === "ru" ? "_ru.png" : lang === "uz" ? "_uz.png" : ".png"}`} alt="reg_banner_img" />
    </div>
  );
}

export default RegBanner;
