// const dataPoints = chartData.map((data, index) => ({
//   x: index + 1,
//   y: data,
// }));
import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
export default function Chart({ wpm, raw }: { wpm: number[]; raw: number[] }) {
  return (
    <LineChart
      bottomAxis={{
        tickLabelStyle: {
          textAnchor: "middle",
          fontSize: 12,
          fill: "#646669",
        },
      }}
      leftAxis={{
        labelStyle: {
          fontSize: 14,
        },
        tickLabelStyle: {
          textAnchor: "middle",
          fontSize: 12,
        },
      }}
      sx={{
        //change left yAxis label styles
        "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
          strokeWidth: "0.4",
          fill: "#646669",
        },
        "& .MuiChartsAxis-left .MuiChartsAxis-label": {
          // strokeWidth: "0.4",
          fill: "#646669",
        },
        "& .MuiChartsAxis-left .MuiChartsAxis-tick": {
          strokeWidth: "0",
        },
        "& .MuiChartsAxis-bottom .MuiChartsAxis-tick": {
          strokeWidth: "0",
        },
        // change all labels fontFamily shown on both xAxis and yAxis
        "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel": {
          fontFamily: "Roboto",
        },
        // change bottom label styles
        "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
          strokeWidth: "0",
          fill: "#646669",
        },
        // bottomAxis Line Styles
        "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
          stroke: "#646669",
          strokeWidth: 0,
        },
        // leftAxis Line Styles
        "& .MuiChartsAxis-left .MuiChartsAxis-line": {
          stroke: "#646669",
          strokeWidth: 0,
        },
      }}
      xAxis={[
        {
          data: Array.from({ length: 30 }, (_, i) => i + 1),
          labelStyle: {
            fill: "#646669",
          }, // Add title to x-axis
          disableLine: true,
          hideTooltip: true,
        },
      ]}
      yAxis={[
        {
          label: "Words Per Minute",
          labelStyle: { fill: "#646669" }, // Add title to y-axis
          disableLine: true,

          hideTooltip: true,
        },
      ]}
      series={[
        {
          curve: "catmullRom",
          data: raw.slice(3),
          // area: true,
          label: "Raw",
          color: "#646669",
        },
        {
          curve: "catmullRom",
          data: wpm.slice(3),
          label: "WPM",
          color: "#e2b714",
        },
      ]}
      width={1000}
      height={250}
      grid={{ vertical: true, horizontal: true }}
      slotProps={{ legend: { hidden: true } }}
    />
  );
}
