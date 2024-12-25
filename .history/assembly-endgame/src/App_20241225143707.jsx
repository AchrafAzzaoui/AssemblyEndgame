import { useState } from "react";
import Status from "./components/Status.jsx";
import LanguageTags from "./components/LanguageTags.jsx";

export default function App() {
  const [currentWord, setcurrentWord] = useState("");

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
      <WordDisplay currentWord={currentWord} />
    </main>
  );
}
