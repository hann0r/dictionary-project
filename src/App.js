import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="App-title">Dictionary</span>
      </header>
      <Dictionary />
      <footer>
        Coded by <strong>Hannah Harries</strong> <br />
        <br />
        <a
          href="https://github.com/hann0r/dictionary-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-sourced on GitHub
        </a>
        <br />
        <br />
        <a
          href="https://adorable-lokum-6143fe.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
export default App;
