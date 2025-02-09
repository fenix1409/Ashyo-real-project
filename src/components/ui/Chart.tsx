import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

interface ChartOptions {
  chart: {
    width: number;
    type: string;
  };
  labels: string[];
  responsive: {
    breakpoint: number;
    options: {
      chart: { width: number };
      legend: { position: string };
    };
  }[];
}

const Chart: React.FC = () => {
  const [state, setState] = useState<{
    series: number[];
    options: ChartOptions;
  }>({
    series: [120, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="pie"
          width={380}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Chart