import React, { useState } from "react";
import { Button, Col, Form, Row, message } from "antd";
import InputText from "../../../../../components/Form/InputText";
import PhoneNumber from "../../../../../components/Form/PhoneNumber";
import InputTextArea from "../../../../../components/Form/InputTextArea";
import { ContactApi } from "../../../../../api/Contact";
import { useT } from "../../../../../utils/useT";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
    name: "${label} is not a valid name!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
function ContactForm() {
  const { t } = useT();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    ContactApi.create(values)
      .then((data) => {
        form.resetFields();
        setLoading(false);
        message.success("Success", [2]);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        message.error("Error", [2]);
      });
  };
  return (
    <div className="contact-form">
      <div className="form-title">
        <div className="title">{t("sendUsMessage")}</div>
        <div className="sub-title">
          {t("messageContent")}
        </div>
      </div>
      <div className="contact-form">
        <Form
          form={form}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Row gutter={24}>
            <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
              <InputText
                size="large"
                label={t("yourName")}
                name="name"
                rules={[{ required: true }]}
              />
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
              <InputText
                size="large"
                label={t("yourEmail")}
                name="email"
                rules={[{ required: true }]}
              />
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
              <PhoneNumber name="phone_number" rules={[{ required: true }]} />
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
              <InputTextArea
                label={t("yourMessage")}
                name="message"
                rules={[{ required: true }]}
              />
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
              <Form.Item>
                <Button loading={loading} type="primary" htmlType="submit">
                  {t("submit")}
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default ContactForm;
