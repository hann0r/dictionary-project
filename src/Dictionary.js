import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownShortWide,
  faBookBookmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }
  function handlePexelsResponse(respose) {
    setPhotos(respose.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    // documentation: https://api.dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelsApiKey =
      "563492ad6f91700001000001b94689f5adae4815a33c5fd52078e191";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=5`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="container-fluid-search">
        <div className="row">
          <div cclassName="col-sm-12">
            <div className="Dictionary">
              <form onSubmit={handleSubmit} className="Search">
                <input type="search" onChange={handleKeywordChange} />
                <input
                  type="submit"
                  value="Search"
                  className="search-button"
                ></input>
              </form>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div classNames="col-sm-12">
              <p className="Suggest">
                <strong>Suggested words:</strong>
                <div className="Suggest-words">
                  {" "}
                  <em>Eyeball, Moon, Puppies...</em>
                </div>
              </p>
              <span className="Book">
                <FontAwesomeIcon icon={faBookBookmark} />
              </span>
              <span> Definitions below </span>
              <span className="Book">
                <FontAwesomeIcon icon={faArrowDownShortWide} />
              </span>
              <br />
              <br />
              <Results results={results} />
              <section>
                <Photos photos={photos} />
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    load();
    return "Loading..";
  }
}
