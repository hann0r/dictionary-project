import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }
  function handlePexelsResponse(respose) {
    setPhotos(respose.data.photos);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://api.dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001b94689f5adae4815a33c5fd52078e191";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=12`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search} className="Search">
        <input type="search" onChange={handleKeywordChange} />

        <span className="Hourglass">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </form>
      <strong className="Suggest">Suggested words:</strong> Earth, Moon,
      Peace...
      <Results results={results} />
      <section>
        <Photos photos={photos} />
      </section>
    </div>
  );
}
