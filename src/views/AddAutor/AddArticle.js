import React from "react";
import { Col, Row } from "antd";
import InputText from "../../components/Form/InputText";

function AddArticle() {
  return (
    <div>
      <Row gutter={24}>
        <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
          <InputText
            size={"large"}
            rules={[{ required: true, message: "Missing title name" }]}
            placeholder="Maqolaning nomi / Title*"
            name="title"
          />
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
          <InputText
            size={"large"}
            rules={[{ required: true, message: "Missing keywords name" }]}
            placeholder="Kalit so’zlar / Key words (max: 5)*"
            name="keywords"
          />
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
          <InputText
            size={"large"}
            rules={[{ required: true, message: "Missing section name" }]}
            placeholder="Sho’ba / Section"
            name="section"
          />
        </Col>
      </Row>
    </div>
  );
}

export default AddArticle;
