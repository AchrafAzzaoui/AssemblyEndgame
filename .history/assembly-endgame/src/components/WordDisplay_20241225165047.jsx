import { useState } from "react";

export default function WordDisplay({ guessedLetters, correctWord }) {
  const letterTiles = correctWord.split("").map((letter, index) => {
    return (
      <span className="letter-tile" key={index}>
        {guessedLetters.includes(letter.toUpperCase())
          ? letter.toUpperCase()
          : "\u00A0"}
      </span>
    );
  });
  return <div className="word-display">{letterTiles}</div>;
}
