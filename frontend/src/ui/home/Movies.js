import React, {useEffect, useState} from 'react';

import "./Movies.css"
import {FiStar} from "react-icons/fi";
import axios from "axios";
import {home_url} from "../../Constants";

const Movies = () => {
    const [movies, setMovies] = useState(null)

    useEffect(() => {
        axios.get(home_url).then((response) => {
            setMovies(response.data)
        })
    }, []);

    if (!movies) {
        console.log("Movies is null!!!")
        return null;
    }

    const changeFavorite = (id) => {
        axios.put(`${home_url}/${id}`, {})
    }

    const onFavoriteClick = (index) => {
        const updatedMovies = [...movies];
        updatedMovies[index].isFavorite = !updatedMovies[index].isFavorite;
        setMovies(updatedMovies);
    }

    return (
        <div className="movie-grid">
            {movies.map((movie, index) => (
                <div key={index} className="movie-card">
                    <img src={movie.posterUrl} alt={movie.title}/>
                    <FiStar
                        className="add-to-favorite"
                        onClick={() => {
                            onFavoriteClick(index)
                            changeFavorite(movie.id)
                        }}
                        color={movie.isFavorite ? '#469ff6' : '#443b3b'}
                    />
                </div>
            ))}
        </div>
    );
};

export default Movies;