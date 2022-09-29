import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: []
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers : {
        setMovies: (state, action) => {
            state.movies = action.payload;
        }
    }

})

export const { setMovies } = movieSlice.actions;

export const selectMovies = (state) => state.movie.movies;

export default movieSlice.reducer;


// Action : save data, log in, log out, etc.
// Reducers : takes an action, and changs the state
// State

// Actions -> Reducers -> State