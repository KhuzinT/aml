import React, {useEffect, useState} from 'react';

import {FiDelete, FiSidebar} from "react-icons/fi";

import "./Favorite.css"
import Button from "../utils/Button";
import axios from "axios";
import {favorite_url} from "../../Constants";

const Favorite = ({isSidebarOpen, onSidebarOpen}) => {
    const [favorite, setFavorite] = useState(null)

    useEffect(() => {
        axios.get(favorite_url).then((response) => {
            setFavorite(response.data)
        })
    }, []);

    if (!favorite) {
        console.log("Favorite movies is null!!!")

        return null;
    }

    const deleteFavorite = (id) => {
        axios.put(`${favorite_url}/${id}`, {})
    }

    const onDeleteFavoriteClick = (index) => {
        const updatedFavorite = [...favorite];
        updatedFavorite.splice(index, 1);
        setFavorite(updatedFavorite);
    }


    return (
        <div className='favorite-page'>
            <header className="header"
                    style={{display: "flex", flexDirection: "row", alignItems: "center", padding: "25px"}}>
                {!isSidebarOpen &&
                    <Button
                        onClick={onSidebarOpen}
                        background={'transparent'}
                        padding={'7px'}
                        margin={'20px'}
                        content={
                            <FiSidebar size={42}/>
                        }
                        contentColor={'rgba(247,247,248,0.91)'}
                        borderColor={'black'}
                    ></Button>
                }

                <text style={{fontSize: "42px", color: "#fff", marginLeft: "20px"}}>Favorite</text>
            </header>

            <div className="movie-list" style={{paddingLeft: isSidebarOpen ? "30px" : "120px"}}>
                {favorite.map((movie, index) => (
                    <div key={index} className="movie-item">
                        <h1 style={{color: "#fff", margin: "20px", width: "64px"}}>{index + 1}</h1>
                        <img src={movie.posterUrl} alt={`Poster for ${movie.title}`}/>
                        <div className="movie-details">
                            <h1 className="movie-title"
                                style={{fontSize: "48px", color: "white", maxWidth: "700px"}}>{movie.title}</h1>
                            <p className="release-date" style={{fontSize: "32px", color: "white"}}>Release
                                Date: {movie.releaseDate}</p>
                        </div>

                        <button
                            className="delete-icon"
                            style={{
                                color: "#fff",
                                background: "transparent",
                                border: "0px",
                                marginLeft: "auto",
                                marginRight: "64px"
                            }}
                            onClick={() => {
                                onDeleteFavoriteClick(index)
                                deleteFavorite(movie.id)
                            }}
                        ><FiDelete size={64}/>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Favorite;