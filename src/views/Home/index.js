import { BackTop } from "antd";
import React from "react";
import Navbar from "../../components/Navbar";
import Banner from "./component/Banner";
import Commitee from "./component/Commitee";
import Contact from "./component/Contact";
import Counter from "./component/Counter";
import Expect from "./component/Expect";
import Footer from "./component/Footer";
import Papers from "./component/Papers";
import Schedule from "./component/Schedule";
import Speakers from "./component/Speakers";
import Stay from "./component/Stay";
export const Home = () => {
  return (
    <div className="SERBEMA-2024_wrapper">
      <BackTop />
      <Navbar />
      <Banner />
      <Counter />
      <Commitee />
      <Speakers />
      <Schedule />
      <Papers />
      <Expect />
      <Stay />
      <Footer />
      <Contact />
    </div>
  );
};

export default Home;
