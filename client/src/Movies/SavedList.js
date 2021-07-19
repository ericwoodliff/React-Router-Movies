import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';


export default function SavedList(props) {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <Route to= "/"><div className="home">Home</div></Route>
    </div>
  );
}
