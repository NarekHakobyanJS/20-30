import { configureStore } from "@reduxjs/toolkit";
import filmsSlice from "./slices/filmsSlice";
import genresSlice from "./slices/genresSlice";

const store = configureStore({
    reducer : {
        genresData : genresSlice,
        filmsData : filmsSlice
    }
})

export default store;