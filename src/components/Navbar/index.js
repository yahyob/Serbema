import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  LoginOutlined,
  UserAddOutlined,
  MenuFoldOutlined,
  DownOutlined,
  ExclamationCircleOutlined,
  LogoutOutlined,
  DownloadOutlined,
  EditOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Menu, Dropdown, Modal, message, Select } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { scrollTo } from "../../utils/scrollTo";
import { linksEn, linksRu, linksUz, setLang } from "../../constants";
import { MainContext } from "../../context/MainContext";
import { logout } from "../../utils/logout";
import { useT } from "../../utils/useT";
import "./style.scss";
import CovidInfo from "../../views/Home/component/CovidInfo";

const handleClick = (href) => scrollTo({ id: href });

const Navbar = () => {
  const { t, lang } = useT();
  const { setToggle } = useContext(MainContext);
  const navigate = useNavigate();
  const isToken = localStorage.getItem("accessToken");
  const { Option } = Select;


  const menu1 = (
    <Menu>
      <Menu.Item onClick={() => handleClick("commite")}>{t("chair")}</Menu.Item>
      <Menu.Item onClick={() => handleClick("co-chairs")}>{t("coChair")}</Menu.Item>
      <Menu.Item onClick={() => handleClick("coordinators")}>{t("coordinator")}</Menu.Item>
      <Menu.Item><Link to="/board">{t("board")}</Link></Menu.Item>
    </Menu>
  );
  const menu2 = (
    <Menu>
      <Menu.Item onClick={() => handleClick("honorable")}>{t("honorable")}</Menu.Item>
      <Menu.Item onClick={() => handleClick("keynote")}>{t("keynote")}</Menu.Item>
    </Menu>
  );

  const handleLngChange = (lang) => {
    setLang(lang);
    window.location.reload();
  }

useEffect(() => {}, [])

  const socialMedias = [
    {
      id: "1",
      imgUrl: "/assets/img/instagram.png",
      toUrl: "https://www.instagram.com/SERBEMA-2024_conference/"
    },
    {
      id: "2",
      imgUrl: "/assets/img/facebook.png",
      toUrl: "https://www.facebook.com/SERBEMA-2024conference"
    },
    {
      id: "3",
      imgUrl: "/assets/img/telegram.png",
      toUrl: "https://t.me/+HmW2-C6PQZBlNzc6"
    }
  ]

  // hide navbar when scroll down

  const [show, setShow] = useState(false);

  const lastScroll = window.pageYOffset;
  const controlNavbar = useCallback(() => {
    if (window.pageYOffset >= lastScroll) {
      setShow(true)
    } else {
      setShow(false)
    }

  }, [lastScroll])

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [controlNavbar])



  return (
    <div id="home" className={`navbar active ${show && 'hidden'}`}>
      <div className="container">
        <div className="navbar-content">
          <div className="nav-logo">
            <div className="company">SERBEMA-2024</div>
          </div>
          <div className="nav-links">
            <ul>
              {
                socialMedias.map(socialMedia => (
                  <li className="social_media_link" key={socialMedia.id}>
                    <a href={socialMedia.toUrl} target="_blank" rel="noopener noreferrer">
                      <img src={socialMedia.imgUrl} alt="" className="social_media_img" />
                    </a>
                  </li>
                ))
              }
              <li>
                <Dropdown overlay={menu1} placement="bottomCenter" arrow>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    {t("commite")} <DownOutlined />
                  </a>
                </Dropdown>
              </li>
              <li>
                <Dropdown overlay={menu2} placement="bottomCenter" arrow>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    {t("speakers")} <DownOutlined />
                  </a>
                </Dropdown>
              </li>
              {(lang === "en" ? linksEn : lang === "uz" ? linksUz : lang === "ru" ? linksRu : linksEn).map((data, key) => (
                <li key={key} onClick={() => handleClick(data.href)}>
                  {data.title}
                </li>
              ))}

              {!isToken && (
                <>
                  <li className="login-button">
                    <Link to="/register">
                      <UserAddOutlined className="login-button" />
                      {t("signUp")}
                    </Link>
                  </li>
                  <li className="login-button">
                    <Link to="/login">
                      <LoginOutlined className="login-button" />
                      {t("signIn")}
                    </Link>
                  </li>
                </>
              )}
              {isToken && (
                <>
                  <li className="login-button">
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
                    <p className="logout" onClick={() => logout(navigate)} >
                      <LogoutOutlined className="login-button" /> {t("logout")}
                    </p>
                  </li>
                </>
              )}
              <li>
                {/* <Select defaultValue={lang} style={{ width: 120 }} onChange={handleLngChange}>
                  <Option value="en">EN</Option>
                  <Option value="ru">RU</Option>
                  <Option value="uz">UZ</Option>
                </Select> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="toggle-btn">
        <MenuFoldOutlined
          onClick={() => setToggle(true)}
          style={{ fontSize: "30px", color: "#000" }}
        />
      </div>
      <CovidInfo />
    </div>
  );
};

export default Navbar;
