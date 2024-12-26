import { useState } from "react";
import clsx from "clsx";

export default function Status({ isGameLost, isGameWon }) {
  let heading = "";
  let message = "";

  if (isGameLost) {
    heading = "You lose!";
    message = "Better luck next time!";
  } else if (isGameWon) {
    heading = "You win!";
    message = "Well done! 🎉";
  }

  return (
    <div className={clsx("game-status", { lost: isGameLost, won: isGameWon })}>
      <h2>{heading}</h2>
      <p>{message}</p>
    </div>
  );
}
