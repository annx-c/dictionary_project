import React from "react";
import "./App.css";
export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div>
        <strong>Synonyms</strong>
        <ul className="Synonyms">
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
