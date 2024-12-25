import { useState } from "react";
import { languages } from "../data/languages.js";

export default function LanguageTags() {
  const languageTags = languages.map((language) => {
    const { name, backgroundColor, color } = language;
    return (
      <div
        className="language-tag"
        style={{ backgroundColor: backgroundColor, color: color }}
      >
        <h3>{name}</h3>
      </div>
    );
  });
  return <div className="language-tags-container">{languageTags}</div>;
}
