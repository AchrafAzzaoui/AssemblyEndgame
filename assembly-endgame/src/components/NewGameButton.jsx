export default function NewGameButton({ startNewGame }) {
  return (
    <button onClick={startNewGame} className="new-game-button">
      New Game
    </button>
  );
}
