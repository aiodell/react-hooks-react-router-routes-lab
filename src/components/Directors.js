import React from "react";
import { directors } from "../data";

function Directors() {

  const directorsList = directors.map((director)=> (
    <div key={director.name}>
      <h2>{director.name}</h2>
      {/* Create a map within a map to show the directors movies */}
      <ul>
        {director.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ))

  return(
    <div>
      <h1>Directors Page</h1>
      {directorsList}
    </div>
  )
}

export default Directors;
