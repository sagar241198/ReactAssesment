import axios from 'axios';

export function requestGetMoviesList(){
    return axios.request({
        method:"get",
        url:"https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=horro%20movie"
    })
}

