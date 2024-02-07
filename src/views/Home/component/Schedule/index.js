import React from "react";
import { Steps, Tabs } from "antd";
import SectionTitle from "../../../../components/SectionTitle";
import { useT } from "../../../../utils/useT";
import "./style.scss";
const { TabPane } = Tabs;
const { Step } = Steps;

function Schedule() {
  const { t, lang } = useT();
  return (
    <div className="schedule">
      <SectionTitle id="schedule" title={(lang === "en" ? "" : "") + t("schedule")} />
      <div className="schedule-box">
        <Tabs defaultActiveKey="1" size="small">
          <TabPane tab={(lang === "en" ? "" : "") + t("schedule")} key="1">
            <p>
            {t("data1")} <br/><br/> 
            {t("data2")}<br/><br/> 
            {t("data3")}<br/><br/> 
            {t("data4")}<br/><br/> 
            {t("data5")}<br/><br/> 
            {t("data6")}<br/><br/> 
            </p>
          </TabPane>
          <TabPane tab="26.04.2024" key="2">
          <div>
              <Steps
                className="right-step-column"
                progressDot
                current={10}
                direction="vertical">
                <Step title={t("welcome")} description="" />
                <Step title="11:00 AM " />
                <Step title={t("kirish")} description="" />
                <Step title="13:00 AM " description="" />
                <Step title={t("Taqdimotlar")} description="" />
                <Step title="17:00 PM " description="" />
                <Step title="17:30" description="" />
                <Step title="Conference Dates" description="" />
              </Steps>
            </div>

            <Steps progressDot current={10} direction="vertical">
              <Step
                title="10:30 AM"
                
              />
              <Step title={t("Opening")} description="" />
              <Step title="11:30 AM" description="" />
              <Step title={t("Coffee")} description="" />
              <Step title="14:00 PM" description="" />
              <Step title={t("Taqdirlash")} description="" />
              <Step title={t("Konferensiya")} description="" />
              <Step title="26.09. - 27.09." description="" />
            </Steps>
          </TabPane>
          <TabPane tab="27.04.2024" key="3">
            Content of tab 3
          </TabPane>
          
        </Tabs>

      </div>
    </div>
  );
}

export default Schedule;
