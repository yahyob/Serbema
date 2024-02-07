import React from "react";
import { CompassOutlined, MailOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import { useT } from "../../../../../utils/useT";
function ContactCard() {
  const { t } = useT();

  return (
    <div className="contact-card">
      <Row gutter={[50, 50]}>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <div className="card-item">
            <div className="icon-box">
              <CompassOutlined style={{ fontSize: "50px", color: "#009900" }} />
            </div>
            <div className="text-box">
              <div className="title">{t("address")}</div>
              <div className="description">
                {t("addressContent")}
              </div>
            </div>
          </div>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <div className="card-item">
            <div className="icon-box">
              <MailOutlined style={{ fontSize: "50px", color: "#009900" }} />
            </div>
            <div className="text-box">
              <div className="title">{t("contact")}</div>
              <div className="description">
                <ul>
                  <li>
                    <p>Tel: +998712776983 <br/> E-mail: eco_nii@uznature.uz</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ContactCard;
