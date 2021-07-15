import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { getData } from '../Redux/Action';

const List = () => {

    const dispatch = useDispatch();
    const [addingFav,setFav]=useState([]);

    //storing imto local storage
    const stringForm = JSON.stringify(addingFav)
    localStorage.setItem('FavMovies',stringForm);

    //adding into fav list
    function handleData(data){
        setFav([...addingFav,data]);
        alert("one movie add into your fav list");
    }

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
                                    <button className="btn my-1"
                                        onClick={() => {handleData(data)}}
                                    ><b>Add favourite</b></button>
                                </div>
                            </div>
                        </div>
                    )
                })
            )
        }
    }
    return (
        <>
            <div className="container mb-4 my-3">
                <div className="mb-5">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./image/chhallang.jpg"
                                alt="First slide"
                                style={{ height: "350px" }}
                            />
                            <Carousel.Caption>
                                <h3>Chhalaang(Hindi Comedi Movie)</h3>
                                <p> Rajkummar Rao and Nushrratt Bharuccha in a still from the new Hansal Mehta film</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./image/coma.jpg"
                                alt="COMA (SCI FI MOVIE REVIEW)"
                                style={{ height: "350px" }}
                            />

                            <Carousel.Caption>
                                <h3>COMA (SCI FI MOVIE )</h3>
                                <p>Coma patients find themselves in a visually stunning world of shared memories,
                                    where life is substantially prolonged. But they're also hunted
                                    by monstrous creatures called Reapers</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="./image/jaya-janaki.jpg"
                                alt="Third slide"
                                style={{ height: "350px" }}
                            />

                            <Carousel.Caption>
                                <h3>Jaya Janki(Indian TolyWood Movie)</h3>
                                <p>Jaya Janaki Nayaka is a love story
                                    supported by strong action sequences and a whole lot of emotional drama.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className="bg-white">
                <div className="container py-2 bg-white text-dark text-center">
                    <h5 >Top Trending Movies</h5>
                </div>
                <div className=" d-flex flex-wrap justify-content-center">
                    <Show />
                </div>
            </div>
        </>
    )
}
export default List;