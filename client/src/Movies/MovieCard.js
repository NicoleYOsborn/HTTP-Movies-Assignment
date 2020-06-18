import React from 'react';
import {useHistory, useParams} from 'react-router-dom';
import axios from 'axios';

const MovieCard = props => {
  const { push } = useHistory();
  const { title, director, metascore, stars } = props.movie;
  // const { setMovieList} = props.setMovieList;
  

  const handleDelete = e => {
    e.preventDefault();
    axios
    .delete(`http://localhost:5000/api/movies/${props.movie.id}`)
    // make a PUT request to edit the item
    .then(res => {
      console.log(res)
      
    // {
    //   props.setMovieList(res.data);
    //   push('/')
    // }
    })
    .catch(err=>console.log(err))
  };

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <button
        className="md-button"
        onClick={() => push(`/update-movie/${props.movie.id}`)}
      >Edit Movie</button>
      <button onClick= {handleDelete}>Delete</button>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
