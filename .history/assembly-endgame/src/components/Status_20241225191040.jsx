import { useState } from "react";

export default function Status({ isGameLost, isGameWon }) {
  const heading = isGameLost ? "You lose!" : "You win!";
  const message = isGameLost ? "Better luck next time!" : "Well done! 🎉";
  return (
    <div className="game-status">
      <h2>{heading}</h2>
      <p>{message}</p>
    </div>
  );
}
