import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useContext } from "react";
import TransContext from "../../store/trans-context";
ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart(props) {
  const ctx = useContext(TransContext);

  const amounts = ctx.summaryTrans.map((tr) => tr.amount);
  const transLabels = ctx.summaryTrans.map((tr) => tr.category.toUpperCase());

  const data = {
    type: "scale",
    labels: [...transLabels],

    datasets: [
      {
        label: " # of Votes",
        data: [...amounts],

        backgroundColor: [
          "rgba(255, 206, 86, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(255, 99, 132, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
          "rgba(116, 134, 246, 0.8)",
          "rgba(204, 116, 246, 0.8)",
          "rgba(252, 176, 119, 0.8)",
          "rgba(184, 187, 244, 0.8)",
          "rgba(210, 166, 246, 0.8)",
          "rgba(166, 246, 167, 0.8)",
          "rgba(246, 166, 239, 0.8)",
          "rgba(114, 247, 176, 0.8)",
          "rgba(114, 157, 247, 0.8)",
          "rgba(221, 157, 247, 0.8)",
          "rgba(240, 150, 153, 0.8)",
        ],

        borderWidth: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        align: "right",
        position: "right",
        labels: {
          color: "#000",
        },
      },
      tooltop: {
        enable: false,
      },
    },
  };

  return (
    <div className="doughnutChart">
      <h3 className="heading--four">Ausgaben-Diagramm</h3>
      <Pie data={data} options={options} />
    </div>
  );
}

export default DoughnutChart;
