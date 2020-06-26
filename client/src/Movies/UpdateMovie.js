import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import axios from 'axios';

const initialMovie = {
  title: '',
  director: '',
  metascore: '',
  stars: [],
}

const UpdateMovie = props => {
    const { push } = useHistory();
    const {id} = useParams();
    const [movieInfo, setMovieInfo] = useState(initialMovie);

    useEffect(()=>{
        axios
            .get(`http://localhost:5000/api/movies/${id}`)
            .then(res =>{
                setMovieInfo(res.data);
                console.log(res.data)
            })
            .catch(err=>console.log(err))
    }, [id]);

    const changeHandler = ev =>{
        ev.persist();
        let value = ev.target.value;
        setMovieInfo({
            ...movieInfo,
            [ev.target.name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios
        .put(`http://localhost:5000/api/movies/${id}`, movieInfo)
        // make a PUT request to edit the item
        .then(res =>{
          props.setRefresh(true)
          document.querySelector('form').reset()
          push(`/movies/${id}`)
        })
        .catch(err=>console.log(err))
      };

      return(
          <div>
              <h2>Update Movie</h2>
              <form onSubmit = {handleSubmit}>
                  <input
                    type='text'
                    name='title'
                    onChange={changeHandler}
                    placeholder='Title'
                    value = {movieInfo.title}
                    />

<input
                    type='text'
                    name='director'
                    onChange={changeHandler}
                    placeholder='Director'
                    value = {movieInfo.director}
                    />

<input
                    type='text'
                    name='metascore'
                    onChange={changeHandler}
                    placeholder='Metascore'
                    value = {movieInfo.metascore}
                    />

<input
                    type='text'
                    name='stars'
                    onChange={changeHandler}
                    placeholder='Stars'
                    value = {movieInfo.stars}
                    />

                    <button>Update</button>

              </form>
          </div>
      )
};

export default UpdateMovie;