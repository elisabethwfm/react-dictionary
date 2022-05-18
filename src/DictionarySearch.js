import React, { useState } from "react";

export default function DictionarySearch() {
  let [searchTerm, setSearchTerm] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${searchTerm}`);
  }

  function handleSearchTerm(event) {
    console.log(event);
  }

  return (
    <div className="dictionarySearch">
      <h1>Dictionary App</h1>
      <form onSubmit={search}>
        <input
          type="search"
          className="dictionary"
          placeholder="Type a word..."
          onChange={handleSearchTerm}
        ></input>
        <span className="search-btn">🔍</span>
      </form>
    </div>
  );
}
