import React from "react";
import "./App.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="photo-card">
          {props.photos.map(function (photo, index) {
            return (
              <div key={index}>  <a href={photo.src.original} target="blank" rel="noreferrer">
                  
                  <img src={photo.src.landscape}   alt={`Illustration of ${props.word}`}/>
                </a>
              </div>
              
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
