import React from "react";

const avarage = (arr) => arr.reduce((sum, cur) => sum + cur / arr.length, 0);

function Summary({ watched }) {
  const avgRating = avarage(watched.map((movie) => movie.imdbRating));
  const avgUserRating = avarage(watched.map((movie) => movie.userRating));
  const avgRunTime = avarage(watched.map((movie) => movie.runtime));
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐</span>
          <span>{avgRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⌚</span>
          <span>{avgRunTime}</span>
        </p>
      </div>
    </div>
  );
}

export default Summary;
