import { useState } from "react";
import clsx from "clsx";

export default function WordDisplay({
  guessedLetters,
  correctWord,
  isGameLost,
}) {
  const letterTiles = correctWord.split("").map((letter, index) => {
    return !isGameLost ? (
      <span className="letter-tile" key={index}>
        {guessedLetters.includes(letter) ? letter : "\u00A0"}
      </span>
    ) : (
      <span
        className={clsx({
          "letter-tile": true,
          "failed-to-guess": !guessedLetters.includes(letter),
        })}
        key={index}
      >
        {letter}
      </span>
    );
  });

  return <div className="word-display">{letterTiles}</div>;
}
