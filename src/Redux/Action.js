export const getData = ()=>({
    type:"GET_DATA",
    payload:""
})
export const MovieAction = (Movies)=>({
    type:"Movie_data",
    payload:Movies
})

export const FavMovie = (Movies)=>({
    type:"FAV_MOVIE",
    payload:Movies
})