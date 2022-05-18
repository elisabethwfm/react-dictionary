import React from "react";

export default function DictionarySearch() {
  return (
    <div className="dictionarySearch">
      <h1>Dictionary App</h1>
      <form>
        <input
          type="text"
          className="dictionary"
          placeholder="Type a word..."
        ></input>
        <span className="search-btn">🔍</span>
      </form>
    </div>
  );
}
