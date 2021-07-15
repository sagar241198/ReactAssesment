export const InitialState = {
    results: []
}
export const allMoviesReducer = (state = InitialState, { type, payload }) => {
    switch (type) {
        case "Movie_data":
            return { ...state, payload };
        default:
            return state;
    }
}
export const FavMovieReducer = (state = [], { type, payload }) => {
    switch (type) {
        case "FAV_MOVIE":
            return { ...state, payload };
        default:
            return state;
    }
}