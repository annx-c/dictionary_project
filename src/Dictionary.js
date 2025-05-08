import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos"

import "./App.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
   setPhotos(response.data.photos);
  }

  function search() {
    
    let apiKey = "b9of4f791t3095ebe30890c6aaeec246";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey = "o1aBVRpBELwNtRxDCZ6hKdWXsMV9avRfCX6yLoxFc8PkywXKvHJD1mXk";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;

    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);

   
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();

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
    <div className="Dictionary">
      <section>
      <h1>What word do you want to look up?</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleKeywordChange}
            defaultValue={props.defaultKeyword}
          />
        </form>
        <div className="hint">
          suggested words: sunset, moon, music....
        </div>
      </section>
      
      <Results results={results} />
      <Photos photos={photos}/>
    </div>
  );
 }
 else{
  load();
  return "Loading...";
 }
}
