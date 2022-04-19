import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="Meaning">
            <h3> {props.meaning.partOfSpeech}</h3>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {" "}
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12">
                  <div className="definition">{definition.definition}</div>
                  <div className="example">{definition.example}</div>
                </div>
              </div>
            </div>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
