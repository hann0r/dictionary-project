import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        {props.photos.map(function (photo, index) {
          return (
            <div className="container">
              <div className="row">
                <div className="col-sm-5">
                  <div className="col-5" key={index}>
                    <a
                      href={photo.src.original}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={photo.src.landscape}
                        alt="images searched"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
