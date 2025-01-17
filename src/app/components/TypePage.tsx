"use client";
import React, { useState, useEffect, useRef } from "react";
import Word from "./Word";

export default function TypePage({ text }: { text: string }) {
  const [typo, setTypo] = useState("");
  const [fin, setFin] = useState(false);
  const [timer, setTimer] = useState<number | null>(null);
  const activeWordRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const word = text.split(" ");
  const typoWord = typo.split(" ");
  useEffect(() => {
    if (
      typoWord.length === word.length &&
      typoWord[word.length - 1]?.length === word[word.length - 1].length
    ) {
      setFin(true);
    }
  }, [typo]);
  // FIX ME WHEN YOU WAKE UP
  useEffect(() => {
    const handleTimer = () => {
      timerRef.current = setInterval(() => {
        setTimer((prev) => {
          if (prev === 0) {
            clearInterval(timerRef.current!);
            setFin(true);
            return prev;
          }
          return prev === null ? 30 : prev - 1;
        });
      }, 1000);
      document.removeEventListener("keydown", handleTimer);
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
        setTypo((prev) => prev + key);
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
    <div className="mt-52 text-4xl">
      <div className="text-[#e2b714] h-10 self-start ">{timer}</div>
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
        {fin && <div>Baba, game don finish rest</div>}
      </div>
    </div>
  );
}
