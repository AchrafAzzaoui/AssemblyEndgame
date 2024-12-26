import { useState } from "react";
import Confetti from "react-confetti";
import { languages } from "./data/languages.js";
import { words } from "./data/words.js";
import { getRandomWord } from "./data/utils.js";
import Status from "./components/Status.jsx";
import LanguageTags from "./components/LanguageTags.jsx";
import WordDisplay from "./components/WordDisplay.jsx";
import Keyboard from "./components/Keyboard.jsx";
import NewGameButton from "./components/NewGameButton.jsx";

export default function App() {
  const [correctWord, setCorrectWord] = useState(() =>
    getRandomWord(words).toUpperCase()
  );
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [lastGuessedWrong, setLastGuessedWrong] = useState(false);

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
      if (prevLetters.length !== prevGussedLetters.length) {
        if (!correctWord.includes(letter)) {
          setLastGuessedWrong(true);
        } else {
          setLastGuessedWrong(false);
        }
      }
      return Array.from(prevLetters);
    });
  }

  function startNewGame() {
    setCorrectWord(getRandomWord(words).toUpperCase());
    setGuessedLetters([]);
    setLastGuessedWrong(false);
  }

  return (
    <main>
      <header>
        {isGameWon && <Confetti recycle={false} />}
        <h3 className="game-title">Assembly Endgame</h3>
        <p className="game-description">
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </header>
      <Status
        isGameLost={isGameLost}
        isGameWon={isGameWon}
        lastGuessedWrong={lastGuessedWrong}
        numWrongGuesses={numWrongGuesses}
        languages={languages}
      />
      <LanguageTags numWrongGuesses={numWrongGuesses} />
      <WordDisplay
        correctWord={correctWord}
        guessedLetters={guessedLetters}
        addGuessedLetter={addGuessedLetter}
        isGameLost={isGameLost}
      />
      <Keyboard
        guessedLetters={guessedLetters}
        addGuessedLetter={addGuessedLetter}
        correctWord={correctWord}
        isGameOver={isGameOver}
      />
      {isGameOver && <NewGameButton startNewGame={startNewGame} />}
    </main>
  );
}
