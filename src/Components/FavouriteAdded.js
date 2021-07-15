import React from 'react';

import { NavLink } from 'react-router-dom';
const Favourite = () => {
       let favData = JSON.parse(localStorage.getItem('FavMovies'))
    return (
        <>
        <div className="container w-50 my-5 bg-dark text-white text-center">
            <h5>Your Fav Movie List</h5>
        </div>
            <div className="container w-75 d-flex flex-wrap my-5 ">
                {
                    favData.map((data, index) => {
                        let url = `@Movie-Details_id=${data.id}`
                        let img = `https://image.tmdb.org/t/p/original${data.poster_path}`
                        return (
                            <div className="m-2 my-2">
                                <div className="card p-2" style={{ width: "13rem" }}>
                                    <NavLink to={url} >
                                        <img src={img} className="card-img-top" alt="..." style={{ height: "130px" }} />
                                    </NavLink>
                                    <div className="card-body">
                                        <p className="card-title" style={{ fontSize: "12px" }}>{data.title}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Favourite;