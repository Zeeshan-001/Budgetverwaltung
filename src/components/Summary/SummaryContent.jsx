import React from "react";
import SummaryTrans from "./SummaryTrans";
import LinearChart from "./linearChart";

function SummaryContent(props) {
  return (
    <div className="summary__content">
      <SummaryTrans />
      <LinearChart />
    </div>
  );
}

export default SummaryContent;
