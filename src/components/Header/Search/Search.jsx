import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { changeText } from '../../../store/slices/filmsSlice';
import './Search.css'

const imgUrl = "https://image.tmdb.org/t/p/w500/";

const Search = ({setOpen}) => {
  const dispatch = useDispatch()
  const { serchFilms } = useSelector((state) => state.filmsData)

  const clearInput = () => {
    setOpen(false)
    dispatch(changeText(''))
  }
  return (
    <ul className='ul'>
      {
        serchFilms.map((sf) => {
          return <li key={sf.id} onClick={() => clearInput()}>
            <NavLink to={`/${sf.id}`}>
              <img src={imgUrl + sf.poster_path} />
              <p>{sf.title}</p>
            </NavLink>
          </li>
        })
      }
    </ul>
  )
}

export default Search