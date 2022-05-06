import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <span className="App-title">Dictionary</span>
            </div>
          </div>
          <div></div>
        </div>
      </header>
      <Dictionary defaultKeyword="galaxy" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <p className="Original">
              <strong>Click images for original source</strong>
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div class="container-fluid-git">
        <div class="row">
          <div class="col-sm-12">
            <p className="Github">
              ♡ Coded with love by <strong>Hannah Harries</strong> ♡<br />
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
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
export default App;
