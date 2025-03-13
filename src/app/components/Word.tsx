"use client";

export default function Word({
  word,
  typoWord,
  active,
  index,
  ref,
}: {
  word: string;
  typoWord: string;
  active: boolean;
  index: number;
  ref: React.Ref<HTMLDivElement>;
}) {
  const typoLetters: string[] = typoWord?.split("");
  const colorCheck = function (typo: string | undefined, lett: string) {
    if (typo == undefined) return "#646669";
    return typo == lett ? "#d1d0c5" : "#ca4754";
  };
  const cursorRight = function (index: number) {
    if (active) return typoLetters?.length - 1 == index ? "#e2b714" : "";
  };

  return (
    <div
      className={`flex flex-wrap gap-0 justify-start items-start mr-5 mb-4 border-l-[3px] border-transparent tracking-tight select-none ${
        active && index == 0 && typoLetters?.length < 1 && "blinking-cursor"
      }`}
      style={{
        borderColor:
          active && typoLetters?.length < 1 ? "#e2b714" : "transparent",
      }}
      ref={active ? ref : null}
    >
      {word.split("").map((lett, index) => (
        <span
          key={index}
          className={`border-r-[3px] border-transparent`}
          style={{
            color: colorCheck(typoLetters?.[index], lett),
            borderColor: cursorRight(index),
          }}
        >
          {lett}
        </span>
      ))}
      {typoLetters?.length > word.split("").length &&
        typoLetters.slice(word.split("").length).map((typErr, index) => (
          <span
            key={index}
            className={`border-r-2 border-transparent text-[#ca4754]`}
            style={{
              borderColor: cursorRight(index + word.split("").length),
            }}
          >
            {typErr}
          </span>
        ))}
    </div>
  );
}
