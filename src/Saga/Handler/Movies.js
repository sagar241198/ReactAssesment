import { call,put } from '@redux-saga/core/effects';
import { MovieAction } from '../../Redux/Action';
import { requestGetMoviesList } from '../ApiCall/GetApiMovies';

export function* HandleGetMoviesList(action) {
    try{
        const response = yield call(requestGetMoviesList);
        const  { data }= response;
        yield put(MovieAction(data))
    } catch(err){
        console.log(err);
    }
}