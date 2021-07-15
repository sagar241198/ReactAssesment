import { combineReducers } from "redux";
import {allMoviesReducer, FavMovieReducer} from './Reducer';

const rootReducer = combineReducers({
    allMovies:allMoviesReducer,
    fave:FavMovieReducer
})
 export default rootReducer;