import { t } from "i18next";
import React from "react";
import SectionTitle from "../../../../components/SectionTitle";
import Slider from "./component/Slider";
import "./style.scss";
// import conferenceChairsData from "./chairsData/conferenceChairsData.json";
import conferenceChairsData from "./chairsData/ORGANIZING COMMITTEE.json";
import conferenceChairsData1 from "./chairsData/ORGANIZING COMMITTEE2.json";
import ScientificCommitee from "./chairsData/SCIENTIFICCOMMITTEE.json";
import ScientificCommitee1 from "./chairsData/SCIENTIFICCOMMITTEE2.json";
// import conferenceCoChairs2Data from "./chairsData/conferenceCoChairs2Data.json";
// import conferenceCoChairs3Data from "./chairsData/conferenceCoChairs3Data.json";
import conferenceCoordinatorsData from "./chairsData/conferenceCoordinatorsData.json";


function Commitee() {
  return (
    <div className="commitee">
      <SectionTitle id="commite" title="" />
      <SectionTitle title={t("conferenceChairs")} />
      <Slider slideList={conferenceChairsData} view={4} spaceBetween={70} />
      <Slider slideList={conferenceChairsData1} view={4} spaceBetween={70} />
      <SectionTitle id="co-chairs" title={t("conferenceCoChairs")} />
      <Slider slideList={ScientificCommitee} view={4} spaceBetween={70} />
      <Slider slideList={ScientificCommitee1} view={4} spaceBetween={70} />
    </div>
  );
}

export default Commitee;
