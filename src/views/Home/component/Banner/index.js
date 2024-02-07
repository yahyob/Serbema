import React, { useState } from "react";
import { Link } from "react-router-dom";
import AntModal from "../../../../components/Modal";
import { useT } from "../../../../utils/useT";


const Banner = () => {
  const { t, lang } = useT();
  const [visible, setVisible] = useState(false);
  const isToken = localStorage.getItem("accessToken")

  // banner url ni tilga qarab almashtirish
  const bannerUrl = lang === "en" ? "/assets/img/bannerfull.png" : lang === "ru" ? "/assets/img/bannerfull.png" : lang === "uz" ? "/assets/img/bannerfull.png" : "/assets/img/bannerfull.png"

  return (
    <div className="banner">
      <AntModal
        visible={visible}
        setVisible={setVisible}
        content={"bla bla bla vbla"}
      />
      <div className="img-banner">
        <img src={bannerUrl} alt="banner" />
      </div>
      {/* <div className="banner-content">
        <div className="title">
          International Conference <br /> on Sustainable Management <br /> of
          Earth Resources and <br /> Biodiversity
        </div>
        <div className="date">
          <div className="month">october</div>
          <div className="day">14th - 16th </div>
        </div>
        <div className="location">Uzbekistan, Tashkent</div>
      </div> */}
      <div className="button-box">

        {!isToken ? (
          <Link to="/login" className="menu-button">
            {t("submitPaper")} & {t("registration")}
          </Link>
        ) : (
          <Link to="/addautor" className="menu-button">
            {t("submitPaper")} & {t("registration")}
          </Link>
        )
        }
        <a href="#schedule" className="menu-button">
          {t("program")}
        </a>
        <Link to="/addautor" className="menu-button">
          {t("submissionGuidelines")}
        </Link>
      </div>
    </div>
  );
};

export default Banner;
