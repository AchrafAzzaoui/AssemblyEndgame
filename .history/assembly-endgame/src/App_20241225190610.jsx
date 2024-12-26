import { useState } from "react";
import { languages } from "./data/languages.js";
import Status from "./components/Status.jsx";
import LanguageTags from "./components/LanguageTags.jsx";
import WordDisplay from "./components/WordDisplay.jsx";
import Keyboard from "./components/Keyboard.jsx";
import NewGameButton from "./components/NewGameButton.jsx";

export default function App() {
  const [correctWord, setCorrectWord] = useState("REFACTOR");
  const [guessedLetters, setGuessedLetters] = useState([]);

  const numWrongGuesses = guessedLetters.filter(
    (letter) => !correctWord.includes(letter)
  ).length;

  const isGameLost = numWrongGuesses === languages.length - 1;
  const isGameWon = correctWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameOver = isGameLost || isGameWon;

  function addGuessedLetter(letter) {
    setGuessedLetters((prevGussedLetters) => {
      const prevLetters = new Set(prevGussedLetters);
      prevLetters.add(letter);
      return Array.from(prevLetters);
    });
  }
  return (
    <main>
      <header>
        <h3 className="game-title">Assembly Endgame</h3>
        <p className="game-description">
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <Status />
      <LanguageTags numWrongGuesses={numWrongGuesses} />
      <WordDisplay
        correctWord={correctWord}
        guessedLetters={guessedLetters}
        addGuessedLetter={addGuessedLetter}
      />
      <Keyboard
        guessedLetters={guessedLetters}
        addGuessedLetter={addGuessedLetter}
        correctWord={correctWord}
      />
      {isGameOver && <NewGameButton />}
    </main>
  );
}
