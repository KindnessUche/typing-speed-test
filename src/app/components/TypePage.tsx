"use client";
import {
  useEffect,
  useState,
  useRef,
  KeyboardEvent as ReactKeyboardEvent,
} from "react";
import Word from "./Word";

export default function TypePage({ text }: { text: string }) {
  const [typo, setTypo] = useState("");
  const [fin, setFin] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Automatically focus the input when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const word = text.split(" ");
  const typoWord = typo.split(" ");
  useEffect(
    function () {
      if (typoWord.length == word.length) {
        setFin(true);
      }
    },
    [typo]
  );
  const handleKeyDown = (event: ReactKeyboardEvent<HTMLInputElement>) => {
    const key = event.key;

    // Prevent default behavior for arrow keys
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(key)) {
      event.preventDefault();
      return;
    }
  };
  return (
    <div className="relative flex flex-wrap m-auto text-5xl justify-center max-w-5xl p-8 text-left  bg-green-200">
      {word.map((word, index) => (
        <Word
          word={word}
          key={index}
          typoWord={typoWord[index]}
          active={typoWord.length - 1 === index}
          // activeCur={activeCur}
        />
      ))}
      <input
        className="absolute w-full h-full bg-transparent opacity-0 outline-none"
        onChange={(e) => setTypo(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={fin}
        value={typo}
        ref={inputRef}
      />
      {fin && <div>Baba, game don finish rest</div>}
    </div>
  );
}
