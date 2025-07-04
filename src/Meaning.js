import React from "react";
import Synonyms from "./Synonyms";
import "./App.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="definition"> {props.meaning.definition}</div>
      <div className="example">
        {props.meaning.example && (
          <div>
            <strong>Example: </strong>{props.meaning.example}
          </div>
        )}
      </div>

      {props.meaning.synonyms && props.meaning.synonyms.length > 0 && (
        <Synonyms synonyms={props.meaning.synonyms} />
      )}
      
    </div>
  );
}
