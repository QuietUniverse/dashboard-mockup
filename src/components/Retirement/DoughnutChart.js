import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ completionPercentage = 30 }) {
  const sliceThickness = {
    id: "sliceThickness",
    beforeDraw(chart) {
      let sliceThicknessPixel = [280, 240];
      sliceThicknessPixel.forEach((thickness, index) => {
        chart.getDatasetMeta(0).data[index].outerRadius =
          (chart.chartArea.width / thickness) * 100;
      });
    },
  };

  const options = {
    plugins: {
      sliceThickness,
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    cutout: 90,
  };

  const data = {
    labels: ["% of goals", "% remaining"],
    datasets: [
      {
        data: [completionPercentage, 100 - completionPercentage],
        backgroundColor: ["#22d6aa", "rgba(34,214,170,0.2)"],
        borderWidth: 0,
      },
    ],
  };

  return <Doughnut data={data} options={options} plugins={[sliceThickness]} />;
}

export default DoughnutChart;
