export default function Keyboard() {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  const letterButtons = letters.map((letter) => {
    return (
      <button key={letter} className="letter-button">
        {letter}
      </button>
    );
  });
  return <div className="keyboard">{letterButtons}</div>;
}
