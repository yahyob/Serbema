import React from "react";
import PhoneInputCom from "react-phone-number-input";
import "react-phone-number-input/style.css";
import ru from "react-phone-number-input/locale/ru";
import { Form } from "antd";
import { useT } from "../../utils/useT";

function PhoneNumber(props) {
  const { t } = useT()
  return (
    <Form.Item label={t("yourNumber")} name={props.name} rules={props.rules}>
      <PhoneInputCom
        className="custom-phone-input"
        international
        labels={ru}
        countryOptionsOrder={["UZ", "RU", "US", "..."]}
        {...props}
      />
    </Form.Item>
  );
}

export default PhoneNumber;
