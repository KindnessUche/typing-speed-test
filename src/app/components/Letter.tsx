import React from "react";

export default function Letter({ text }: { text: string }) {
  return (
    <>
      <span className="text-slate-400 border-r-2">{text}</span>
    </>
  );
}
