import React from "react";
import { IoWallet } from "react-icons/io5";
import SummaryBtns from "./SummaryBtns";

const SummaryHeading = () => {
  return (
    <section className="SummaryHeading">
      <header className="content">
        <span className="icon" aria-label="Wallet Icon">
          <IoWallet />
        </span>
        <div>
          <div className="summaryDetails">
            <h2 className="heading--secondary">Digitale Geldbörse</h2>
            <span>Überblick Ausgaben</span>
          </div>
        </div>
      </header>
      <SummaryBtns />
    </section>
  );
};

export default SummaryHeading;
