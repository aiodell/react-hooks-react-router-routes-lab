import React from "react";
import { actors } from "../data";

function Actors() {
  
  const actorInfo = actors.map((actor) => (
    <div key = {actor.name}>
      <h2>{actor.name}</h2>
      {/* Create a map within a map to show the Actors movies */}
      <ul>
       {actor.movies.map((movie) => (
        <li key = {movie}>
          {movie}
        </li>
       ))}
      </ul>
    </div>
  ))

  return (
  <div>
    <h1>Actors Page</h1>
    {actorInfo}
  </div>
  )
}

export default Actors;
