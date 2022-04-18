import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="App-title">Dictionary</span>
      </header>

      <Dictionary defaultKeyword="galaxy" />

      <div class="container ms-1000">
        <div class="row">
          <div class="col-sm-4">
            <footer>
              <p className="Github">
                <FontAwesomeIcon icon={faHandPointUp} />
                <p className="Original">
                  <em>
                    <strong>Click images</strong> for original source{" "}
                  </em>
                </p>
                <br />
                <br />
                Coded by{" "}
                <strong>
                  <u>Hannah Harries</u>
                </strong>
                <br />
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
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
