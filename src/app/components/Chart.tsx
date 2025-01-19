// const dataPoints = chartData.map((data, index) => ({
//   x: index + 1,
//   y: data,
// }));
import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function Chart() {
  return (
    <LineChart
      sx={{
        //change left yAxis label styles
        "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
          strokeWidth: "0.4",
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
          stroke: "#00000FF",
          strokeWidth: 0,
        },
      }}
      xAxis={[
        {
          data: Array.from({ length: 31 }, (_, i) => i),
          labelStyle: {
            fill: "#646669",
          }, // Add title to x-axis
          disableLine: true,
          hideTooltip: true,
        },
      ]}
      yAxis={[
        {
          label: "Words Per Minute (WPM)",
          labelStyle: { fill: "#646669" }, // Add title to y-axis
          disableLine: true,
        },
      ]}
      series={[
        {
          curve: "catmullRom",
          data: [
            0, 50, 28, 45, 45, 39, 42, 41, 51, 42, 53, 54, 45, 48, 49, 48, 29,
            40, 44, 45, 46, 37, 34, 35, 46, 47, 44, 25, 46, 45, 20,
          ],
          // area: true,
          label: "Raw",
          color: "#646669",
        },
        {
          curve: "catmullRom",
          data: [
            0, 35, 46, 37, 34, 25, 36, 35, 30, 30, 28, 35, 25, 29, 32, 31, 31,
            32, 33, 34, 25, 28, 29, 28, 29, 30, 24, 25, 26, 27, 34,
          ],
          label: "WPM",
          color: "#e2b714",
        },
      ]}
      width={1200}
      height={250}
      grid={{ vertical: true, horizontal: true }}
    />
  );
}
