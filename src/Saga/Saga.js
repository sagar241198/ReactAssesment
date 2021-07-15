import { takeEvery,call ,put ,takeLatest} from "@redux-saga/core/effects";
import { HandleGetMoviesList } from "./Handler/Movies";

export function* watchSaga(){
    yield takeEvery("GET_DATA",HandleGetMoviesList);
}