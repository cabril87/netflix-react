import React, { useState, useEffect } from 'react'
import axios from '../api/axios'
import "./Row.css"

const base_url = 'https://image.tmdb.org/t/p/original/'

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            console.log(request.data.results);
            return Request;
        }
        fetchData()
    }, [fetchUrl]);

    // console.table(movies)

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map((movie) => (
                    <img
                        key={movies.id}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>


        </div>
    )
}

export default Row;
