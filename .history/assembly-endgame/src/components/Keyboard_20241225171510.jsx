import { clsx } from "clsx";

export default function Keyboard({
  guessedLetters,
  addGuessedLetter,
  correctWord,
}) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const letterButtons = letters.map((letter) => {
    return (
      <button
        key={letter}
        value={letter}
        onClick={(event) => addGuessedLetter(event.currentTarget.value)}
        className={clsx({
          "letter-button": true,
          correct:
            guessedLetters.includes(letter) && correctWord.includes(letter),
          incorrect:
            guessedLetters.includes(letter) && !correctWord.includes(letter),
        })}
      >
        {letter}
      </button>
    );
  });
  return <div className="keyboard">{letterButtons}</div>;
}
