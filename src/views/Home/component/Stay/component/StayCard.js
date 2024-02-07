import React, { useState } from "react";
import { Col, Row } from "antd";
import "./style.scss";
import { useT } from "../../../../../utils/useT";


function StayCard() {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const [showMore4, setShowMore4] = useState(false);
  const [showMore5, setShowMore5] = useState(false);

  const toggleShowMore = (setShowMore) => setShowMore(prev => !prev)
  const { t } = useT();



  return (
    <Row gutter={[70, 70]}>
      
      <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
        <div className="card-box conference_fee">
          <div className="stay-card">
            <div className="title">
              <h3>
                {t("conferenceFeeObj.card1Title")}
              </h3>

            </div>
            {
              showMore1 ? (
                <div className="description">
                  <h3 className="card_price">
                    <del style={{ display: "block" }}>3 {t("mln")} UZS</del>
                    2.5 {t("mln")} UZS
                  </h3>
                  <p>
                    {t("conferenceFeeObj.serviceIncluded")}
                  </p>
                  <ul>
                    <li>
                      {t("conferenceFeeObj.card1Content1")}
                    </li>
                    <li>
                      {t("conferenceFeeObj.card1Content2")}
                    </li>
                    <li>
                      {t("conferenceFeeObj.card1Content3")}
                    </li>
                  </ul>


                </div>
              ) : null
            }
            <div className="read-more" onClick={() => toggleShowMore(setShowMore1)}>{showMore1 ? t("hide") : t("showMore")}</div>
          </div>
        </div>
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
        <div className="card-box conference_fee">
          <div className="stay-card">
            <div className="title">
              <h3>
                {t("conferenceFeeObj.card2Title")}
              </h3>
            </div>
            {
              showMore2 ? (
                <div className="description">
                  <h3 className="card_price">
                    <del style={{ display: "block" }}>2.5 {t("mln")} UZS</del>
                    2 {t("mln")} UZS
                  </h3>
                  <p>
                    {t("conferenceFeeObj.serviceIncluded")}
                  </p>
                  <ul>
                    <li>
                      {t("conferenceFeeObj.card2Content2")}
                    </li>
                    <li>
                      {t("conferenceFeeObj.card2Content3")}
                    </li>
                  </ul>
                </div>
              ) : null
            }
            <div className="read-more" onClick={() => toggleShowMore(setShowMore2)}>{showMore2 ? t("hide") : t("showMore")}</div>
          </div>
        </div>
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
        <div className="card-box conference_fee">
          <div className="stay-card">
            <div className="title">
              <h3>
                {t("conferenceFeeObj.card3Title")}
              </h3>

              <h3>
                {t("conferenceFeeObj.card3Content1")}
              </h3>
            </div>
            <div className="stay_image_area">
              <a href="https://advances.uzsci.uz/en/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/img/Technical-research.jpg" alt="Technical-research" className="stay_image" />
              </a>
            </div>
            {
              showMore5 ? (
                <div className="description">
                  <h3 className="card_price">
                    540,000 UZS
                  </h3>
                  <p>
                    {t("conferenceFeeObj.indexedIn")}
                  </p>
                  <ul>
                    <li>
                      - Google Scholar
                    </li>
                    <li>
                      - DOI -CrossRef
                    </li>
                    <li>
                      - SLib.uz
                    </li>
                    <li>
                      {t("conferenceFeeObj.supremeAtt")}
                    </li>
                    <li>
                      - ResearchGate
                    </li>
                  </ul>
                </div>
              ) : null
            }
            <div className="read-more" onClick={() => toggleShowMore(setShowMore5)}>{showMore5 ? t("hide") : t("showMore")}</div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default StayCard;
