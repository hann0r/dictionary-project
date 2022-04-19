import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div>
        {" "}
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <ul className="Synonyms">
                {props.synonyms.map(function (synonym, index) {
                  return <li key={index}>{synonym}</li>;
                })}
              </ul>
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  } else {
    return null;
  }
}
