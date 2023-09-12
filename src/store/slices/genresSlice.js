import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { filmsAPI } from "../../api/api";


export const fetchGenres = createAsyncThunk(
    'fetchGenres',
    async () => {
        const response = await filmsAPI.getGenres();

        const data = await response.data.genres;

        return data

    }
)

export const fetchGenresGroup = createAsyncThunk(
    'fetchGenresGroup',
    async ({ id, pageNumber }) => {
        const resposne = await filmsAPI.getFilmsByGenres(id, pageNumber);

        const data = resposne.data.results

        return data
    }
)
const genresSlice = createSlice({
    name: 'genresSlice',
    initialState: {
        genres: [],
        genresFilms: [],
        pageNumber: 1,
        isFetching: false
    },
    reducers: {
        changePage(state, action) {
            state.pageNumber = state.pageNumber + 1
        }
    },
    extraReducers: {
        [fetchGenres.fulfilled]: (state, action) => {
            state.genres = action.payload
        },
        [fetchGenresGroup.pending] : (state, action) => {
            state.isFetching = true
        },
        [fetchGenresGroup.fulfilled]: (state, action) => {
            state.genresFilms = action.payload
            state.isFetching = false
        }
    }
})

export const { changePage } = genresSlice.actions
export default genresSlice.reducer;


