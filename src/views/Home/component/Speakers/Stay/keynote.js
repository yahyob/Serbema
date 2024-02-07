import React from "react";
import Slider from "./component/Slider";
import {useT} from "../../../../../utils/useT"
import List from "../speakersData/EDITORIALBOARD.json"

function Stay() {
  const {t} = useT();
  return (
    <div >
      {/* <SectionTitle id="venue" title={t("honorable")} /> */}
      <Slider slideList={List} view={4} spaceBetween={70} />
      {/* <SectionTitle id="conference" title={t("conferenceFee")} /> */}
      
    </div>
  );
}

export default Stay;
