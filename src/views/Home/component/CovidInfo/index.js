import React from 'react';
import { useT } from '../../../../utils/useT';
import "./style.scss";

function CovidInfo() {
  const { t } = useT();
  return (
    <div className='covid_info'>
      <a href="https://www.uzairways.com/en/covid-19-0" target={"_blank"} className="covid_info_link" rel="noopener noreferrer">
        {t("covidInfoText")}
      </a>
    </div>)

}

export default CovidInfo;
