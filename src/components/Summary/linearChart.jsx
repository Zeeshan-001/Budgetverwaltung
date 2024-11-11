import React from "react";
import { Line } from "react-chartjs-2";

import {
  Chart,
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  PointElement
);

const LinearChart = () => {
  // Data for the linear chart
  const data = {
    labels: [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      " Oktober",
      " November",
      "Dezember",
    ],
    datasets: [
      {
        label: " Monatliche Ausgabenübersicht",
        fill: true,
        lineTension: 0.6,
        backgroundColor: "#fff",
        borderColor: "rgba(255, 99, 132, 0.8)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#000",
        pointBorderWidth: 1,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(75,192,192,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 2,
        pointHitRadius: 1,
        data: [50, 60, 70, 80, 60, 40, 20],
      },
    ],
  };

  // Options for the linear chart
  const options = {
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Months",
          },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Values",
          },
        },
      ],
    },
  };

  return <Line data={data} options={options} />;
};

export default LinearChart;
