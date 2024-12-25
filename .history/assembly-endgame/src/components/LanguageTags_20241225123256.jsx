import { useState } from "react";
import { languages } from "../data/languages.js";

export default function LanguageTags() {
  const languageTags = languages.map((language) => {
    const { name, backgroundColor, color } = language;
    <div
      className="language-tag"
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      <h5>{name}</h5>
    </div>;
  });

  return <div className="language-tags-container"></div>;
}
