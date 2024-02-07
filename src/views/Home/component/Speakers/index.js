import React from "react";
import SectionTitle from "../../../../components/SectionTitle";
import { useT } from "../../../../utils/useT";

import KeynoteCard from "./component/KeynoteCard";
import "./style.scss"
import KeynoteSpeakersData from "./speakersData/KEYNOTESPEAKERS.json";
import HonorableSpeakers from "./speakersData/HonorableSpeakersData.json"
import EditorialBoardData from "./speakersData/EDITORIALBOARD.json"
import Editoriable from "./Stay/index"
import HonorableCard from "./Stay/keynote";

function Speakers() {
  const { t } = useT();
  return (

    <div className="speakers" >
      
       <SectionTitle id="keynote" title={t("EditorialBoardData")} />
       <Editoriable />
      
       
      <SectionTitle id="keynote" title={t("keynoteSpeakers")} />
      <div style={{marginLeft:"15%"}}>
      <KeynoteCard slideList={KeynoteSpeakersData} />
      </div>

      <SectionTitle id="keynote" title={t("honorableSpeakers")} />
       <HonorableCard />

    
    </div>
  );
}

export default Speakers;
