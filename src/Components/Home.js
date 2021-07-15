import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import GetMovies from '../Saga/ApiCall/GetApiMovies';

function Home() {



  // useEffect(() => {
  //   console.log("inside home page");
  //  console.log(GetMovies())
    
  // }, [])
  return (
    <>
      <div className="bg-dark" style={{ width: "100vw", height: "90vh" }}>
        <div className="List py-5 ">
          <h4>Movie House</h4>
        </div>
        <div>
          <div id="circle">
            <div id="square"></div>
          </div>
        </div>
        <div className="List py-5">
          <h4><NavLink to="/movies">Watch Movie</NavLink></h4>
        </div>
      </div>
    </>
  )
}
export default Home;