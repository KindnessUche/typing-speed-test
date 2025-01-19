import Chart from "./Chart";

export default function FinishedPage({
  chartData,
  fin,
}: {
  chartData: number[];
  fin: boolean;
}) {
  return (
    <div className="min-w-96 text-[#646669]">
      FinishedPage
      {/* <div>{fin && <Chart chartData={chartData} />}</div> */}
      <div className="select-none">
        <Chart />
      </div>
    </div>
  );
}
