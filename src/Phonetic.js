import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./Phonetic.css";

export default function Phonetic(props) {
  const audio = new Audio(props.phonetic.audio);

  function handleClick() {
    audio.play();
  }

  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <button type="button" className="Phonetic-button" onClick={handleClick}>
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <span className="Phonetic text">{props.phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
