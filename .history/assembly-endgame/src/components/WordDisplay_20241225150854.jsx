import { useState } from "react";

export default function WordDisplay({ currentWord, correctWord }) {
  const currWordLetters = currentWord
    .split("")
    .map((letter) => letter.toUpperCase());
  const correctWordLetters = correctWord
    .split("")
    .map((letter) => letter.toUpperCase());

  const letterTiles = correctWordLetters.map((letter, index) => {
    return (
      <span className="letter-tile" key={index}>
        {currWordLetters[index] || "\u00A0"}
      </span>
    );
  });
  return <div className="word-display">{letterTiles}</div>;
}
