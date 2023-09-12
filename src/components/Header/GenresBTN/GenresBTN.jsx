import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGenresGroup } from '../../../store/slices/genresSlice'
import './GenresBTN.css'
import { NavLink } from 'react-router-dom'

const GenresBTN = ({ genre }) => {
  const dispatch = useDispatch()
  const { pageNumber } = useSelector((state) => state.genresData)
  console.log(pageNumber);
  const filmGnre = () => {
    dispatch(fetchGenresGroup({ id: genre.id, pageNumber: pageNumber }))
  }
  return (
    <NavLink
      to={`/genre/${genre.id}`}
      onClick={filmGnre}
      className='GenresBTN'
    >{genre.name}</NavLink>
  )
}

export default GenresBTN