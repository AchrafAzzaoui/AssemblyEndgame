import { useState } from "react";
import { languages } from "../data/languages.js";
import { clsx } from "clsx";

export default function LanguageTags({ numWrongGuesses }) {
  const languageTags = languages.map((language, index) => {
    const { name, backgroundColor, color } = language;
    const isLanguageLost = index < numWrongGuesses;
    return (
      <div
        className={clsx({
          "language-tag": true,
          lost: index < numWrongGuesses,
        })}
        style={{ backgroundColor: backgroundColor, color: color }}
      >
        <h5>{name}</h5>
      </div>
    );
  });
  return <div className="language-tags-container">{languageTags}</div>;
}
