"use client";
import React, { useState, useEffect, useRef } from "react";
import Word from "./Word";
import FinishedPage from "./FinishedPage";

export default function TypePage({ text }: { text: string }) {
  const [typo, setTypo] = useState("");
  const [fin, setFin] = useState(false);
  const [timer, setTimer] = useState<number>(0);
  const [wpmChart, setWpmChart] = useState<number[]>([0]);
  const activeWordRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const word = text.split(" ");
  const typoWord = typo.split(" ");
  const [prevLen, setPrevLen] = useState([0]);
  useEffect(() => {
    if (
      typoWord.length === word.length &&
      typoWord[word.length - 1]?.length === word[word.length - 1].length
    ) {
      setFin(true);
    }
  }, [typo]);
  // Timer and WPM logic for chart
  useEffect(() => {
    const handleTimer = (e: KeyboardEvent) => {
      if (e.key) document.removeEventListener("keydown", handleTimer);
      setTimer(30);
      timerRef.current = setInterval(() => {
        setTimer((prev) => {
          if (prev === 0) {
            clearInterval(timerRef.current!);
            setFin(true);
            return prev;
          }
          return (prev ?? 30) - 1;
        });
      }, 1000);
    };
    document.addEventListener("keydown", handleTimer);
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      document.removeEventListener("keydown", handleTimer);
    };
  }, []);
  useEffect(() => {
    setPrevLen((len) => [...len, typo.length]);
    const lettersTyped = prevLen.slice(-1)[0] - prevLen.slice(-2)[0];
    const wpm = Math.round(lettersTyped / (5 * 0.01667));
    setWpmChart((prevChart) => [...prevChart, wpm]);
  }, [timer]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;

      // Prevent default behavior for arrow keys
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(key)) {
        event.preventDefault();
        return;
      }

      // Update typo state based on key press
      if (key === "Backspace") {
        // Prevent backspace if the current word is empty
        if (typoWord[typoWord.length - 1]?.length > 0) {
          setTypo((prev) => prev.slice(0, -1));
        }
      } else if (key === " ") {
        // Prevent spacebar if the current word is empty
        if (typoWord[typoWord.length - 1]?.length > 0) {
          setTypo((prev) => prev + key);
        }
      } else if (key.length === 1) {
        setTypo((prev) => {
          return prev + key;
        });
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [typo]);
  useEffect(() => {
    if (activeWordRef.current) {
      activeWordRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }
  }, [typo]);

  return (
    <div className="">
      <div className={`flex flex-col mt-52 text-4xl ${fin && "hidden"}`}>
        <div className="text-[#e2b714] h-10 self-start flex ">
          {timer !== 0 && timer}
          {wpmChart.map((speed) => (
            <div>{speed}</div>
          ))}
        </div>
        <div className="mt-5 relative flex flex-wrap leading-10 max-w-7xl text-left bg-[#323437] font-normal font-mono h-[160px] overflow-x-visible overflow-y-auto pointer-events-none scroll-none">
          {word.map((word, index) => (
            <Word
              word={word}
              key={index}
              typoWord={typoWord[index]}
              active={typoWord.length - 1 === index}
              index={index}
              ref={activeWordRef}
            />
          ))}
        </div>
      </div>
      <FinishedPage />
    </div>
  );
}
