import React, { useEffect, useRef } from "react";

function Search({ query, setQuery }) {
  const inputEl = useRef(null);
  useEffect(() => {
    const callback = (e) => {
      if (e.code === "Enter") {
        inputEl.current.focus();
        setQuery("");
      }
    };
    document.addEventListener("keydown", callback);
    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [setQuery]);

  return (
    <input
      ref={inputEl}
      type="search"
      className="search"
      placeholder="Search movies...."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    ></input>
  );
}

export default Search;
