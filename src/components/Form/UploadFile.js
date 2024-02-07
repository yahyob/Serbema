import React from "react";
import { Upload, message } from "antd";
import PlusOutlined from "@ant-design/icons/PlusOutlined";
const UploadFile = ({
  className = "",
  maxCount,
  accept,
  listType
}) => {

  const beforeUpload = (file) => {
    const isDocument = (file.type === 'image/png')
    if (!isDocument) {
      message.error('You can only upload doc or docx file!');
    }
  }

  return (
    <Upload name="file" className={className} maxCount={maxCount} beforeUpload={beforeUpload} accept={accept} listType={listType} action="false">
      <div>
        <PlusOutlined style={{ fontSize: "32px" }} />
        <div style={{ marginTop: 8, fontSize: "32px" }}>Upload</div>
      </div>
    </Upload>
  );
};

export default UploadFile;
