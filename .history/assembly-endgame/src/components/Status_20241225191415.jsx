import { useState } from "react";
import clsx from "clsx";

export default function Status({ isGameLost, isGameWon }) {
  const heading = isGameLost ? "You lose!" : "You win!";
  const message = isGameLost ? "Better luck next time!" : "Well done! 🎉";

  return (
    <div className={clsx("game-status", { lost: isGameLost, won: isGameWon })}>
      <h2>{heading}</h2>
      <p>{message}</p>
    </div>
  );
}
