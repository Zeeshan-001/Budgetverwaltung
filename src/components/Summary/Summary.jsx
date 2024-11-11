import React from "react";
import DoughnutChart from "../Chart/DoughnutChart";
import SummaryContent from "./SummaryContent";
import Navbar from "./../Navbar/Navbar";
import Categories from "../categories/categories";
import SummaryHeading from "./SummaryHeading";

function Summary(props) {
  return (
    <div className="summary">
      <Navbar />
      <SummaryHeading />
      <div className="summary__container">
        <SummaryContent />
        <DoughnutChart />
      </div>
      <Categories />
    </div>
  );
}

export default Summary;
