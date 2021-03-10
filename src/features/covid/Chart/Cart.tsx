import React from "react";
import styles from "./Chart.module.css";
import { Line } from "react-chartjs-2";

import { useSelector } from "react-redux";
import { selectDaily, selectCountry } from "../covidSlice";

const Chart: React.FC = () => {
  const daily = useSelector(selectDaily);
  const dates = daily.map(({Date}) => Date);

  const lineChart = daily[0] && (
    <Line
      data={{
        labels: dates.map((date) => new Date(date).toDateString()),
        datasets: [
          {
            data: daily.map((data) => data.Confirmed),
            label: "Infected",
            borderColor: "rgb(30, 111, 95)",
            showLine: false,
          },
          {
            data: daily.map((data) => data.Recovered),
            label: "Recovered",
            borderColor: "rgb(110, 189, 158)",
            showLine: false,
          },
          {
            data: daily.map((data) => data.Deaths),
            label: "Deaths",
            borderColor: "rgb(110, 189, 158)",
            showLine: false,
          },
        ],
      }}
    />
  );

  return (
  <div className={styles.container}>
    {lineChart}
  </div>
  );
};

export default Chart;