import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

export default function MovieList(props) {
  let { link } = useRouteMatch();
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <Route to = {`${link}Movies/${movie.id}`}><MovieDetails key={movie.id} movie={movie} /> </Route>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
