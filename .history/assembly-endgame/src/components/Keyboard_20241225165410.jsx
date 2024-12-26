export default function Keyboard({ guessedLetters, addGuessedLetter }) {
  console.log("Rendering Keyboard with guessedLetters:", guessedLetters);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const letterButtons = letters.map((letter) => {
    return (
      <button
        key={letter}
        value={letter}
        onClick={(event) => addGuessedLetter(event.currentTarget.value)}
        className="letter-button"
      >
        {letter}
      </button>
    );
  });
  return <div className="keyboard">{letterButtons}</div>;
}
