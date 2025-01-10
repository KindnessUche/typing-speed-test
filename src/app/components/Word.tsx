"use client";
import { act, useEffect, useState } from "react";

export default function Word({
  word,
  typoWord,
  active,
}: // activeCur,
{
  word: string;
  typoWord: string;
  active: boolean;
  // activeCur: boolean;
}) {
  const typoLetters: string[] = typoWord?.split("");
  const colorCheck = function (typo: string | undefined, lett: string) {
    if (typo == undefined) return "#666";
    return typo == lett ? "white" : "red";
  };
  const cursorRight = function (index: number) {
    if (active) return typoLetters?.length - 1 == index ? "yellow" : "";
  };

  return (
    <span
      className={`mr-4 border-l-[3px] border-transparent tracking-tight`}
      style={{
        borderColor:
          active && typoLetters?.length < 1 ? "yellow" : "transparent",
      }}
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
      {typoLetters?.length > word.split("").length ? (
        typoLetters.slice(word.split("").length).map((typErr, index) => (
          <span
            key={index}
            className={`border-r-2 border-transparent text-red-600`}
            style={{
              borderColor: cursorRight(index + word.split("").length),
            }}
          >
            {typErr}
          </span>
        ))
      ) : (
        <span></span>
      )}
    </span>
  );
}
