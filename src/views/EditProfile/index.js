import React, { useState } from 'react';
import { Button, Col, Form, message, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";
import InputEmail from "../../components/Form/InputEmail";
import InputPassword from "../../components/Form/InputPassword";

function EditProfile() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);

  };

  return (
    <div className='logout_area'>
      <Form onFinish={onFinish} autoComplete="off">
        <Row gutter={24}>
          <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
            <InputEmail
              size={"large"}
              rules={[{ required: true }]}
              placeholder="E-mail"
              name="email"
            />
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
            <InputPassword
              size={"large"}
              rules={[{ required: true }]}
              placeholder="Password"
              name="password"
            />
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
            <Form.Item>
              <Button
                loading={loading}
                className="login-btn"
                size="large"
                htmlType="submit"
              >
                Login
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default EditProfile
