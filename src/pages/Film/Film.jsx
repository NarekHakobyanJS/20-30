import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneFilm, fetchVideo} from '../../store/slices/filmsSlice';
import './Film.css';


const imgUrl = "https://image.tmdb.org/t/p/w500/";

const Film = () => {
    const dispatch = useDispatch();
    const { film } = useSelector((state) => state.filmsData);
    const { id } = useParams();
    const navigate = useNavigate();
    const iframe = useRef(null)

    useEffect(() => {
        dispatch(fetchOneFilm(id));
        dispatch(fetchVideo({id, iframe}))
    }, [id]);

    return (
        <>
        <button onClick={() => navigate(-1)}>{"<"}</button>
        <iframe ref={iframe}/>
        <div className='film'>
            <div className='film-left'>
                <img src={imgUrl + film.poster_path} />
            </div>
            <div>
                <h2>{film.title}</h2>
                <p>{film.overview}</p>
                <b>{film.release_date}</b>
            </div>
        </div>
        </>
    )
}

export default Film;