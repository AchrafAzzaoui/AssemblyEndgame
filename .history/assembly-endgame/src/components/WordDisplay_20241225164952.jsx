import { useState } from "react";

export default function WordDisplay({ guessedLetters, correctWord }) {
  const currWordLetters = guessedLetters
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
