import { useState } from "react";
import clsx from "clsx";
import { getFarewellText } from "../data/utils";

export default function Status({
  isGameLost,
  isGameWon,
  lastGuessedWrong,
  numWrongGuesses,
  languages,
}) {
  let heading = "";
  let message = "";

  if (isGameLost) {
    heading = "You lose!";
    message = "Better luck next time!";
  } else if (isGameWon) {
    heading = "You win!";
    message = "Well done! 🎉";
  } else if (lastGuessedWrong) {
    const languageRemoved = languages[numWrongGuesses - 1].name;
    const farewellText = getFarewellText(languageRemoved);
    heading = farewellText;
  } else {
    heading = "";
    message = "";
  }

  return (
    <div
      className={clsx("game-status", {
        lost: isGameLost,
        won: isGameWon,
        farewell: !isGameLost && lastGuessedWrong,
      })}
    >
      <h2>{heading}</h2>
      <p>{message}</p>
    </div>
  );
}
