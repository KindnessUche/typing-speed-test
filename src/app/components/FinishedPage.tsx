import Chart from "./Chart";
import { FiRefreshCcw } from "react-icons/fi";
export default function FinishedPage({
  chartData,
  fin,
  accuracy,
  avgWpm,
  rawWpm,
  restartGame,
}: {
  chartData: number[];
  fin: boolean;
  accuracy: number;
  avgWpm: number;
  rawWpm: number;
  restartGame: () => Promise<void>;
}) {
  const wpm = chartData.map((raw) => Math.round((raw * accuracy) / 100));
  return (
    <div className="text-[#646669]">
      <div className="ml-5 md:mt-20 flex flex-col md:flex-row text-[#646669] ">
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
        <div className="flex flex-col">
          <div className="select-none">
            <Chart wpm={wpm} raw={chartData} />
          </div>
          <div className="flex justify-between w-full -mt-7 ml-2">
            <div className="mt-1">
              <p className="text-[1.5rem]">language</p>
              <p className="text-[3rem] leading-[3.2rem] text-[#e2b714]">
                english
              </p>
            </div>
            <div className="mt-1">
              <p className="text-[1.5rem]">time</p>
              <p className="text-[3rem] leading-[3.2rem] text-[#e2b714]">30s</p>
            </div>
            <div className="mt-1">
              <p className="text-[1.5rem]">Raw</p>
              <p className="text-[3rem] leading-[3.2rem] text-[#e2b714]">
                {rawWpm}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-8">
        <button
          onClick={restartGame}
          className="text-[#646669] hover:text-[#d1d0c5] text-xl"
        >
          <FiRefreshCcw />
        </button>
      </div>
    </div>
  );
}
