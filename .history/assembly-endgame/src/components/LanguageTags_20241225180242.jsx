import { useState } from "react";
import { languages } from "../data/languages.js";
import { clsx } from "clsx";

export default function LanguageTags({ numWrongGuesses }) {
  const languageTags = languages.map((language, index) => {
    const { name, backgroundColor, color } = language;
    return (
      <div
        className={clsx({
          "language-tag": true,
          lost: index < numWrongGuesses - 1,
        })}
        style={{ backgroundColor: backgroundColor, color: color }}
      >
        <h5>{name}</h5>
      </div>
    );
  });
  return <div className="language-tags-container">{languageTags}</div>;
}