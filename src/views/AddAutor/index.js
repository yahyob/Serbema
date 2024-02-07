import React, { useState, useEffect, useCallback } from "react";
import InputEmail from "../../components/Form/InputEmail";
import InputText from "../../components/Form/InputText";
import { Form, Button, Col, Row, message } from "antd";
import {
  MinusCircleOutlined,
  PlusOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import AddArticle from "./AddArticle";
import { Article } from "../../api/Article";
import { GetUserData } from "../../api/GetUserData";
import InputFile from "../../components/Form/InputFile";
import "./style.scss";

function AddAutor() {
  const formData = new FormData();
  const [isInputChange, setISInputChange] = useState(false);
  const [userData, setUserData] = useState({});
  const [fileData, setFileData] = useState("");
  const { first_name, last_name, affiliation, country, email } = userData;
  const [form] = Form.useForm();


  function getFormData(object) {
    Object.keys(object).forEach((key) => {
      if (typeof object[key] !== "object" && object[key] !== undefined) {
        if (key === "file") {
          formData.append(key, fileData);
        }
        formData.append(key, object[key]);

      } else {
        let objList = object[key];
        if (object[key] === undefined) {
          objList = []
        }
        objList.push(userData);
        formData.append(key, JSON.stringify(objList));
      }
    });
    return formData;
  }

  const onFinish = (values) => {
    Article.create(getFormData(values))
      .then((data) => {
        if (data.length !== 0) {
          message.success("Success", [2]);
          onReset();
        }
        console.log(data);
      })
      .catch((error) => {
        if ((error.response?.status === 400)) {
          message.error("Fill the information correctly", [2]);
          console.log(error.response.data)
        } else if ((error.response?.status === 500)) {
          message.error("Internel server error", [2])
        } else message.error("Unexpected error", [2]);

      });
  };

  const getUserData = useCallback(() => {
    GetUserData.get()
      .then((data) => setUserData(data))
      .catch((error) => console.log(error))
  },
    []);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  const handleFile = (file) => {
    // formData.append("file", file);s
    setFileData(file)
  };

  // maqola muvaffaqiyatli yuklangandan so'ng formani tozalash 
  const onReset = () => {
    form.resetFields();

  };

  const onFill = () => {
    form.setFieldsValue({
      first_name, last_name, affiliation, country, email
    });
  };


  return (
    <div className="register">
      <Row gutter={24}>
        <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
          <div className="submission_template_area">
            <a href="/assets/files/JPCSA4Template.docx" className="submission_link">
              <DownloadOutlined />
              Template for Submissions in English
            </a>
            <a href="/assets/files/IMRAD-структураси.pdf" className="submission_link" target="_blank" rel="noopener noreferrer" >
              <DownloadOutlined />
              Imrad Structure / Imrad Strukturasi
            </a>
            <a href="/assets/files/Регистрация-қилиш.pdf" className="submission_link" target="_blank" rel="noopener noreferrer" >
              Registratsiya qilish /Registration Guideline
            </a>
          </div>
        </Col>
      </Row>
      <div className="reg-title">
        Muallif haqida ma’lumotlar / Author information
      </div>
      <Form
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        autoComplete="off"
        form={form}
      >
        <div className="add_yourself_area">
          <Button className="add_yourself_btn" type="link" htmlType="button" onClick={onFill}>
            o'zini qo'shish / add yourself
          </Button>
        </div>
        <Row gutter={24}>
          <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
            <InputText
              size={"large"}
              placeholder="Ism / First Name"
              name={"first_name"}
              rules={[
                { required: true, message: "Missing first_name name" },
              ]}
            />
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
            <InputText
              size={"large"}
              placeholder="Familya / Last Name"
              name={"last_name"}
              rules={[
                { required: true, message: "Missing last_name name" },
              ]}
            />
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
            <InputText
              size={"large"}
              placeholder="Tashkilot / Affiliation"
              name={"affiliation"}
              rules={[
                { required: true, message: "Missing affiliation name" },
              ]}
            />
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
            <InputText
              size={"large"}
              placeholder="Mamlakat / Country"
              name={"country"}
              rules={[
                { required: true, message: "Missing country name" },
              ]}
            />
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
            <InputEmail
              size={"large"}
              placeholder="E-mail"
              name={"email"}
              rules={[
                { required: true, message: "Missing email name" },
              ]}
            />
          </Col>
        </Row>

        <Form.List name="authors">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }) => (
                <Row gutter={24} key={key}>
                  <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
                    <InputText
                      size={"large"}
                      placeholder="Ism / First Name"
                      {...restField}
                      name={[name, "first_name"]}
                      fieldKey={[fieldKey, "first_name"]}
                      rules={[
                        { required: true, message: "Missing first_name name" },
                      ]}
                    />
                  </Col>
                  <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
                    <InputText
                      size={"large"}
                      placeholder="Familya / Last Name"
                      {...restField}
                      name={[name, "last_name"]}
                      fieldKey={[fieldKey, "last_name"]}
                      rules={[
                        { required: true, message: "Missing last_name name" },
                      ]}
                    />
                  </Col>
                  <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
                    <InputText
                      size={"large"}
                      placeholder="Tashkilot / Affiliation"
                      {...restField}
                      name={[name, "affiliation"]}
                      fieldKey={[fieldKey, "affiliation"]}
                      rules={[
                        { required: true, message: "Missing affiliation name" },
                      ]}
                    />
                  </Col>
                  <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
                    <InputText
                      size={"large"}
                      placeholder="Mamlakat / Country"
                      {...restField}
                      name={[name, "country"]}
                      fieldKey={[fieldKey, "country"]}
                      rules={[
                        { required: true, message: "Missing country name" },
                      ]}
                    />
                  </Col>
                  <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
                    <InputEmail
                      size={"large"}
                      placeholder="E-mail"
                      {...restField}
                      name={[name, "email"]}
                      fieldKey={[fieldKey, "email"]}
                      rules={[
                        { required: true, message: "Missing email name" },
                      ]}
                    />
                  </Col>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Row>
              ))}
              <Row gutter={24}>
                <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add Author / Muallif qo’shish
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </>
          )}
        </Form.List>
        <AddArticle />
        <Row gutter={24}>
          <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
            <h3>
              (max: 10 mb, .docx, .doc)
            </h3>
            <InputFile
              name="file"
              accept=".docx, .doc"
              rules={[{ required: true, message: "Missing file" }]}
              className={isInputChange ? "author_file" : ""}
              onChange={(e) => {
                handleFile(e.target.files[0]);
                e.target.files[0] ? setISInputChange(true) : setISInputChange(false);
              }
              }
            />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default AddAutor;
