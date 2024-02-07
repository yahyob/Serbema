import React from "react";
import { Row, Col } from "antd";
import { useT } from "../../../../../utils/useT";


export default function HonorableCard({ slideList }) {
  const {t, lang} = useT();
  return (
    <Row gutter={[50, 50]}>
      {slideList.map((data, idx) => (
        <Col key={idx} xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} className="honoralbe_col">

          <div className="card-box">
            <div className="speak-card">
              {data.name["en"] === "" ? (
                <p style={{ fontSize: "18px", color: "#fff", textTransform:"capitalize" }}>{t("soon")}</p>
              ) : (
                <>
                  <div className="left-box">
                    <div className="img-box">
                      {data.toUrl !== "" ?
                        (
                          <a href={data.toUrl} className="img_url" target="_blank" rel="noreferrer">
                            <img src={data.img} alt={data.name[lang]} />
                          </a>
                        ) : <img src={data.img} alt={data.name[lang]} />
                      }
                    </div>
                  </div>
                  <div className="right-box">
                    {/* <div className="proffesion">
                      {/* {data.university[lang]} */}
                    {/* </div> */} 
                    <div className="defination">{data.toUrl !== "" ?
                      (
                        <a href={data.toUrl} className="img_url" target="_blank" rel="noreferrer">
                          {data.name[lang]}
                        </a>
                      ) : data.name[lang]
                    }</div>
                    <div className="country">{data.country[lang]}</div>
                    <div className="degree">{data.degree[lang]}</div>
                    {/* <div className="read-more">{t("readMore")}</div> */}
                  </div>
                </>
              )}
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}
