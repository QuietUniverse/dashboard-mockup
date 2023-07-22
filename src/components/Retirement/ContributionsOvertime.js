import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  defaults,
} from "chart.js";
import { useEffect, useRef, useState } from "react";
import { Bar } from "react-chartjs-2";

import styles from "./ContributionsOvertime.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

defaults.font.family = "Nunito Sans, sans-serif";

const isMobileWidth = window.innerWidth <= 700 ? true : false;

const labels = isMobileWidth
  ? ["20", "25", "30", "35", "40", "60", "65"]
  : [
      "20",
      "20",
      "25",
      "25",
      "30",
      "30",
      "35",
      "35",
      "40",
      "40",
      "60",
      "60",
      "65",
    ];
const formattedLabels = !isMobileWidth
  ? labels.map((label, i) => (i % 2 === 0 ? label : ""))
  : labels;
const data = !isMobileWidth
  ? [20, 25, 30, 35, 40, 45, 52, 60, 67, 75, 80, 90, 100]
  : [52, 60, 67, 75, 80, 90, 100];

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
  },
  ticks: {
    font: {
      style: "normal",
      weight: "700",
    },
  },

  scales: {
    x: {
      stacked: true,
      ticks: {
        callback: (_, index) => formattedLabels.at(index),
      },
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      ticks: {
        callback: (value) => (value % 100 === 0 ? `   $${value}` : null),
        font: {
          family: "inherit",
          style: "normal",
          weight: "700",
        },
      },
      border: {
        dash: [4, 8],
        display: false,
      },
    },
  },
};

const dataFormed = {
  labels,
  datasets: [
    {
      label: "Employer:K 73,500",
      data,
      backgroundColor: "#0800a3",
      maxBarThickness: 18,
      minBarThickness: 12,
      categoryPercentage: 0.5,
      barPercentage: 1,
    },
    {
      label: "Employee:K 52,500",
      data,
      backgroundColor: "#4935ff",
      maxBarThickness: 18,
      minBarThickness: 12,
      categoryPercentage: 0.5,
      barPercentage: 1,
    },
    {
      label: "Total Interest:K 244,313",
      data,
      backgroundColor: "#85afff",
      maxBarThickness: 18,
      minBarThickness: 12,
      categoryPercentage: 0.5,
      barPercentage: 1,
    },
  ],
};

function ContributionsOvertime() {
  const barChartRef = useRef(ChartJS);
  const [legend, setLegend] = useState([]);

  useEffect(() => {
    setLegend(barChartRef.current.legend.legendItems);
  }, []);

  return (
    <div className={styles.container}>
      <h3>Contributions overtime</h3>
      <ul className={styles.legends}>
        {legend &&
          legend.map((item) => {
            const legendText = item.text.split(":");
            return (
              <li key={item.text} className={styles.legend}>
                <div
                  className={styles.marker}
                  style={{ backgroundColor: item.fillStyle }}
                ></div>
                <p className={styles.description}>
                  {legendText[0]}:&nbsp;&nbsp;
                </p>
                <span className={styles.value}>{legendText[1]}</span>
              </li>
            );
          })}
      </ul>
      <div className={styles.chart}>
        <Bar data={dataFormed} options={options} ref={barChartRef} />
        <div className={styles.tag}>
          <svg height="100%" width="100%" viewBox="0 -2 24 18">
            <use href="sprite.svg#checkmark" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ContributionsOvertime;
