import React, { Component } from "react";
import Chart from "react-apexcharts";

function Sparkline() {
  let state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "القيمه السوقيه",
        data: [30, 40, 45, 50, 49, 60, 70, 91].reverse(),
      },
    ],

    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      color: "red",
      width: 1,
      dashArray: 0,
    },
    dataLabels: {
      enabled: false, // <--- HERE
    },
  };

  return (
    <div className="w-2/3 mt-5">
      <Chart options={state.options} series={state.series} type="line" />
    </div>
  );
}

export default Sparkline;
