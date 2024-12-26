import { useState } from "react";
import Status from "./components/Status.jsx";
import LanguageTags from "./components/LanguageTags.jsx";
import WordDisplay from "./components/WordDisplay.jsx";
import Keyboard from "./components/Keyboard.jsx";
import NewGameButton from "./components/NewGameButton.jsx";

export default function App() {
  const [correctWord, setCorrectWord] = useState("REFACTOR");
  const [guessedLetters, setGuessedLetters] = useState([]);

  const wrongGuesses = guessedLetters.filter(
    (letter) => !correctWord.includes(letter)
  ).length;

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
      <LanguageTags />
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
      <NewGameButton />
    </main>
  );
}
