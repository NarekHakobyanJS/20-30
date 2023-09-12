import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../../store/slices/genresSlice'
import { NavLink } from 'react-router-dom'
import './Genre.css'
const imgUrl = "https://image.tmdb.org/t/p/w500/";



const Genre = () => {
  const dispatch = useDispatch()
  const { genresFilms, isFetching } = useSelector((state) => state.genresData)
  return (
    <>
      <div className='home'>
        {
          genresFilms.map((film) => {
            return <NavLink
              to={`/${film.id}`}
              className='card'>
              <h4>{film.title}</h4>
              <img src={imgUrl + film.poster_path} />
            </NavLink>
          })
        }
      </div>
      <button
        disabled={isFetching}
        onClick={() => dispatch(changePage())}
        className='pageBTN'>{isFetching ?
          <img
            width={30}
            src='https://i.gifer.com/ZKZg.gif' />
          : "more"
        }</button>
    </>
  )
}

export default Genre