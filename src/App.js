import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import List from './Components/List'
import Details from './Components/Details'
import Favourite from './Components/FavouriteAdded';
import './App.css';

function App() {
  return (
    <>
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movies">
          <List />
        </Route>
        <Route path="/@Movie-Details_id=:id">
          <Details />
        </Route>
        <Route path="/@Movie-My_Favourite@_List">
          <Favourite />
        </Route>
    </>
  );
}
export default App;
