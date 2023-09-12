import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { filmsAPI } from "../../api/api";

export const fetchFilms = createAsyncThunk(
    'fetchFilms',
    async (pageNumber) => {
        const resposne = await filmsAPI.getMoviByPage(pageNumber);

        const data = await resposne.data.results;

        return data
    }
)

export const fetchOneFilm = createAsyncThunk(
    'fetchOneFilm',
    async (id) => {
        const response = await filmsAPI.getOneMovie(id);

        const data = await response.data

        return data
    }
)

export const fetchSearch = createAsyncThunk(
    'fetchSearch',
    async (text) => {
        const response = await filmsAPI.getFilmsSearch(text)

        const data = await response.data.results

        return data
    }
)

export const fetchVideo = createAsyncThunk(
    'fetchVideo',
    async ({id, iframe}) => {
        const response = await filmsAPI.getFilmsTrailer(id);

        const result = await response.data.results;

        const data = result.forEach((elm) => {
            if (elm.name === "Official Trailer") {
                iframe.current.setAttribute(
                    "src",
                    `https://www.youtube.com/embed/${elm.key}`
                );
            } else {
                iframe.current.setAttribute(
                    "src",
                    `https://www.youtube.com/embed/${elm.key}`
                );
            }
        })
        
    }
)
const filmsSlice = createSlice({
    name: "filmsSlice",
    initialState: {
        films: [],
        serchFilms : [],
        film: {},
        text : '',
        pageNumber: 1,
        isFetching: false
    },
    reducers: {
        changePage(state, action) {
            state.pageNumber = state.pageNumber + 1
        },
        changeText(state, action) {
            state.text = action.payload
        }
    },
    extraReducers: {
        //fetchFilms
        [fetchFilms.pending]: (state, action) => {
            state.isFetching = true
        },
        [fetchFilms.fulfilled]: (state, action) => {
            state.films = action.payload
            state.isFetching = false
        },
        //fetchOneFilm
        [fetchOneFilm.fulfilled]: (state, action) => {
            state.film = action.payload
        },
        //fetchSearch
        [fetchSearch.fulfilled] : (state, action) => {
            state.serchFilms = action.payload
        }
    }
})

export const { changePage, changeText } = filmsSlice.actions
export default filmsSlice.reducer