import { useState } from "react";
import text from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [count, setCount] = useState(1);
  const [displayedText, setDisplayedText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setDisplayedText(text.slice(0, amount));
  };

  return (
    <main className="section-center">
      <h4>Tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs: </label>
        <input
          id="amount"
          type="number"
          name="amount"
          value={count}
          min="1"
          step="1"
          max="8"
          onChange={(e) => setCount(e.target.value)}
        ></input>
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      {displayedText.map((text) => {
        const id = nanoid();
        return (
          <article key={id} className="lorem-text">
            <p>{text}</p>
          </article>
        );
      })}
    </main>
  );
};
export default App;
