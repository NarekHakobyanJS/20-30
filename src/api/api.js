import axios from "axios";

const apiKey = 'f36f23edf6e10fd2ddcf939916b1f67a'

const instanse = axios.create({
    baseURL : 'https://api.themoviedb.org/3',
    headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGM4NjNiZjI5MWY1NjUxOTAyYmIzYWY4MjI1NmUwMiIsInN1YiI6IjYxNTYyZWY2ZTE4Yjk3MDA2MjkyODgzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h_pBSpt1JQsgAdYyYZbt6dHDzEmGljF11e4m1MO-CHg",
    }
});


export const filmsAPI = {
    getGenres(){
       return instanse.get(`/genre/movie/list?api_key=${apiKey}&language=en-US`)
    },
    getMoviByPage(pageNumber){
        return instanse.get(`/discover/movie?api_key=${apiKey}&language=en-US&page=${pageNumber}`)
    },
    getOneMovie(id){
        return instanse.get(`/movie/${id}?api_key=${apiKey}&language=en-US`)
    },
    getFilmsSearch(text){
        return instanse.get(`/search/movie?api_key=${apiKey}&query=${text}`)
    },
    getFilmsTrailer(id){
        return instanse.get(`movie/${id}/videos?language=en-US`)
    },
    getFilmsByGenres(id, pageNumber){
        return instanse.get(`/discover/movie?api_key=${apiKey}&language=en-US&with_genres=${id}&page=${pageNumber}`)
    }
}