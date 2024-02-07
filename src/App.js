import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import { fallbackLng, languages } from "./constants";
import "./i18n/config";
import { useTranslation } from "react-i18next";
import ScientificBoard from "./views/ScientificBoard";

const Mobile = lazy(() => import("./components/Navbar/Mobile"));
const AddAutor = lazy(() => import("./views/AddAutor"));
const Home = lazy(() => import("./views/Home"));
const Login = lazy(() => import("./views/Login"));
const Register = lazy(() => import("./views/Register"));


function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    let currentLang = localStorage.getItem("language");

    if (!currentLang) {
      localStorage.setItem("language", fallbackLng);
    } else if (languages.includes(currentLang)) {
      i18n.changeLanguage(currentLang);
    };
  }, [i18n]);


  return (
    <Suspense fallback={<Loading cover="content" />}>
      <BrowserRouter>
        <Mobile />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/addautor" element={<AddAutor />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<ScientificBoard />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
