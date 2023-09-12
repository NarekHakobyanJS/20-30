import React, { useEffect, useState } from 'react';
import './Header.css';
import GenresBTN from './GenresBTN/GenresBTN';
import { NavLink } from 'react-router-dom';
import { fetchGenres } from '../../store/slices/genresSlice';
import { useDispatch, useSelector } from 'react-redux';
import { changeText, fetchSearch } from '../../store/slices/filmsSlice';
import Search from './Search/Search';

const Header = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const { genres } = useSelector((state) => state.genresData)
    const { text } = useSelector((state) => state.filmsData)

    useEffect(() => {
        dispatch(fetchGenres())
    }, [])

    useEffect(() => {
        if(text.length > 1) {
            dispatch(fetchSearch(text))
            setOpen(true)
        }else {
            setOpen(false)
        }
        
    }, [text])

    return (
        <header>
            <div>
                <NavLink to='/'>
                    <h5>MyFilms</h5>
                </NavLink>
            </div>
            <nav>
                {
                    genres.map((genre) => {
                        return <GenresBTN
                            genre={genre}
                            key={genre.id}
                        />
                    })
                }
            </nav>
            <div className='s'>
                <input
                    value={text}
                    onChange={(e) => dispatch(changeText(e.target.value))}
                    />
                {
                    open && <div className='search'>
                        <Search setOpen={setOpen}/>
                    </div>
                }

            </div>
        </header>
    )
}

export default Header