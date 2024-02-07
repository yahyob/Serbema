import React from "react";
import SectionTitle from "../../../../components/SectionTitle";
import Slider from "./component/Slider";
import { useT } from "../../../../utils/useT";
import Paper1Data from "./papersData/Papers1Data.json"
import Paper2Data from "./papersData/Papers2Data.json"

function Papers() {
  const {t} = useT();
  return (
    <div className="papers">
      <SectionTitle id="contribution" title={t("conferenceSection")} />
      <Slider slideList={Paper1Data} view={3} spaceBetween={70} />
      <Slider slideList={Paper2Data} view={3} spaceBetween={70} className={"slider"} />
    </div>
  );
}

export default Papers;
