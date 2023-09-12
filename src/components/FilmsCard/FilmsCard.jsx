import React from 'react'
import { NavLink } from 'react-router-dom';
import './FilmsCard.css'

const imgUrl = "https://image.tmdb.org/t/p/w500/";

const FilmsCard = ({ film }) => {

    return (
        <NavLink
            to={`/${film.id}`}
            className='card'>
            <h4>{film.title}</h4>
            <img src={imgUrl + film.poster_path} />
        </NavLink>
    )
}

export default FilmsCard