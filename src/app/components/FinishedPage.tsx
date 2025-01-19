import Chart from "./Chart";

export default function FinishedPage({
  chartData,
  fin,
  accuracy,
  avgWpm,
  rawWpm,
}: {
  chartData: number[];
  fin: boolean;
  accuracy: number;
  avgWpm: number;
  rawWpm: number;
}) {
  const wpm = chartData.map((raw) => Math.round((raw * accuracy) / 100));
  return (
    <div className="flex flex-col md:flex-row text-[#646669]">
      <div className="">
        <div className="">
          <p className="text-[2rem]">wpm</p>
          <p className="text-[4rem] leading-[3.8rem] text-[#e2b714]">
            {avgWpm}
          </p>
        </div>
        <div className="mt-1">
          <p className="text-[2rem]">acc</p>
          <p className="text-[4rem] leading-[3.8rem] text-[#e2b714]">
            {accuracy}%
          </p>
        </div>
      </div>
      <div className="select-none">
        <Chart wpm={wpm} raw={chartData} />
      </div>
    </div>
  );
}
