import React, { useContext } from "react";
import { LoginOutlined, UserAddOutlined, LogoutOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { scrollTo } from "../../utils/scrollTo";
import { linksEn, linksRu, linksUz, setLang } from "../../constants";
import { Drawer, Select } from "antd";
import { MainContext } from "../../context/MainContext";
import { logout } from "../../utils/logout";
import { useT } from "../../utils/useT";

const Mobile = () => {
  const { t, lang } = useT()
  const { toggle, setToggle } = useContext(MainContext);
  const navigate = useNavigate()
  const isToken = localStorage.getItem("accessToken");
  const { Option } = Select;
  const handleClick = (href) => {
    setToggle(false);
    scrollTo({ id: href });
  };

  const onClose = () => {
    setToggle(false);
  };

  const handleLngChange = (lang) => {
    setLang(lang);
    window.location.reload();
  }

  return (
    <Drawer
      title="SERBEMA-2024 "
      placement="right"
      onClose={onClose}
      visible={toggle}
    >
      <div className="container mobile-sidebar">
        <div className="navbar-content">
          <div className="nav-links">
            <ul>
              {(lang === "en" ? linksEn : lang === "uz" ? linksUz : lang === "ru" ? linksRu : linksEn).map((data, key) => (
                <li key={key} onClick={() => handleClick(data.href)}>
                  {data.title}
                </li>
              ))}

              {!isToken && (
                <>
                  <li onClick={() => handleClick()} className="login-button">
                    <Link to="/register">
                      <UserAddOutlined className="login-button" />
                      {t("signUp")}
                    </Link>
                  </li>
                  <li onClick={() => handleClick()} className="login-button">
                    <Link to="/login">
                      <LoginOutlined className="login-button" />
                      {t("signIn")}
                    </Link>
                  </li>
                </>
              )}
              {isToken && (
                <>
                  <li onClick={() => handleClick()} className="login-button">
                    <Link to="/addautor">
                      <UserAddOutlined className="login-button" />
                      {t("submitPaper")}
                    </Link>
                  </li>
                  <li className="login-button">
                    {/* <Dropdown overlay={menu3} placement="bottomCenter" arrow>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <UserOutlined /> Profile <DownOutlined />
                  </a>
                </Dropdown> */}
                    <p className="logout" onClick={() => logout(navigate, setToggle)} >
                      <LogoutOutlined className="login-button" /> {t("logout")}
                    </p>
                  </li>
                  {/* <li className="languages">
                    <Select defaultValue={lang} style={{ width: 120 }} onChange={handleLngChange}>
                      <Option value="en">EN</Option>
                      <Option value="ru">RU</Option>
                      <Option value="uz">UZ</Option>
                    </Select>
                  </li> */}
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default Mobile;
