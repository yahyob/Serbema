import React from "react";
import { Form, Input } from "antd";

const InputFile = ({
  label,
  name,
  rules,
  restField,
  fieldKey,
  suffix = "",
  onChange,
  className = "",
  accept = ""
}) => {
  return (
    <Form.Item
      {...restField}
      label={label}
      name={name}
      fieldKey={fieldKey}
      rules={rules}
    >
      <Input onChange={onChange} type="file" suffix={suffix} className={className} accept={accept} required />
    </Form.Item>
  );
};

export default InputFile;
