import React, { useState } from "react";
import data from "./assets/data.json";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const result = [];

  data.map((elem) => {
    const title = elem.title;
    const symbol = elem.symbol;

    if (title.includes(search)) {
      result.push(
        <div className="line">
          <div>
            <span>{symbol}</span>
            <span>{title}</span>
          </div>
          <span
            onClick={() => {
              navigator.clipboard.writeText(symbol);
            }}
          >
            copy to clipboard
          </span>
        </div>
      );
    }

    return result;
  });

  return (
    <div className="app">
      <div className="search">
        <span>&#128526; EmojiSearch &#128526;</span>
        <input
          placeholder="What emoji are you looking for ?"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        ></input>
      </div>
      <div className="lines">{result}</div>
      <div className="footer">
        <span>Training project Made with React by H. RAJAONARISON</span>
      </div>
    </div>
  );
}

export default App;
