"use client";

import { useEffect } from "react";

export default function error({
  error,
  reset,
}: {
  error: Error;
  reset: () => {};
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. Please try again later. </h1>
      <button
        className="hover:text-[#e2b714]"
        onClick={() => {
          reset;
        }}
      >
        Try Again
      </button>
    </div>
  );
}
