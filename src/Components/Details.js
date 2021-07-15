
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getData } from '../Redux/Action'




const Details = () => {
    const params = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getData());
    }, [dispatch]);
    const movieData = useSelector((state) => state.allMovies);
    console.log(movieData.payload);
    function Show() {
        if (movieData.payload == undefined) {
            return (
                <h6 className="text-center">Loading....</h6>
            )
        } else {
            return (
                movieData.payload.results.map((data, index) => {
                    let img = `https://image.tmdb.org/t/p/original${data.poster_path}`
                    if (params.id == data.id) {
                        return (
                            <>
                                <div className="container w-75 my-3 text-center">
                                    <div> <p><img src={img} alt={data.title} style={{ height: "400px", width: "80%" }} /></p></div>
                                    <div className="m-2" style={{ fontSize: "12px" }}><b>{data.title}</b></div>
                                    <hr />
                                </div>
                                <div className="container w-75">
                                    <div><h4>{data.title}</h4></div>
                                    <hr />
                                    <div className="font-size"><b>overViews :</b>  {data.overview}</div>
                                    <div className="font-size"><b>Adult :</b>NO</div>
                                    <div className="font-size"><b>original_title :</b>  {data.original_title}</div>
                                    <div className="font-size"><b>original_language :</b>  {data.original_language}</div>
                                    <div className="font-size"><b>release_date :</b>  {data.release_date}</div>
                                    <div className="font-size"><b>vote_average :</b>  {data.vote_average}</div>
                                    <div className="font-size"><b>vote_average :</b>  {data.vote_average}</div>
                                </div>
                                <div className="bg-dark my-5 text-center text-white" style={{height:"30px"}}>
                                    <p>All right reserv!</p>
                                </div>
                            </>
                        )
                    }
                })
            )
        }
    }
    return (
        <>
            <Show />
        </>
    )
}

export default Details;