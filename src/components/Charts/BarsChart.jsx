import React, { Component } from "react";
import Chart from "react-apexcharts";

function BarsChart({ width }) {
  let state = {
    options: {
      plotOptions: {
        bar: {
          borderRadius: 10,
          distributed: true,
        },
      },
      chart: {
        id: "basic-bar",
        width: "100%",
      },
      xaxis: {
        show: false,
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        labels: {
          show: false,
        },
      },
    },
    series: [
      {
        name: "value-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
    fill: {
      type: "pattern",
      pattern: {
        style: "verticalLines",
        width: 1,
        height: 1,
        strokeWidth: 0.5,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 2,
      dashArray: 0,
    },
  };

  return (
    <div className="p-3 mt-3">
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        //    width={width}
      />
    </div>
  );
}

export default BarsChart;
