import React, { useState } from "react";

function ScheduleDate() {
  const [active, setActive] = useState(0);
  const handleActive = (id) => {
    setActive(id);
  };
  const dateList = ["SCHEDULE", "26.09.2023", "27.09.2023"];
  return (
    <div className="schedule-date">
      {dateList.map((data, id) => (
        <div
          className={active === id ? "date active" : "date"}
          onClick={() => handleActive(id)}
        >
          {data}
        </div>
      ))}
    </div>
  );
}

export default ScheduleDate;
