import React, { useEffect } from 'react';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilms, changePage } from '../../store/slices/filmsSlice';
import FilmsCard from '../../components/FilmsCard/FilmsCard';

const Home = () => {
    const dispatch = useDispatch();
    const { films, pageNumber, isFetching } = useSelector((state) => state.filmsData);

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchFilms(pageNumber))
    }, [pageNumber]);

    return (
        <>
            <div className='home'>
                {
                    films.map((film) => {
                        return <FilmsCard
                            film={film}
                            key={film.id} />
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

export default Home