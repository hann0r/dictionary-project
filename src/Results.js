import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <h2> {props.results.word}</h2>
              </div>
            </div>
          </div>

          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12">
                    <div key={index}>
                      <Phonetic phonetic={phonetic} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div class="container-fluid">
              <div class="row">
                <div class="col-sm-10">
                  <section key={index}>
                    <Meaning meaning={meaning} />
                  </section>{" "}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
