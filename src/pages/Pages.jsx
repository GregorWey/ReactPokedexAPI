import React from 'react';
import Home from './Home';
import Moves from './Moves';
import {Route, Routes} from 'react-router-dom';

function Pages() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/moves" element={<Moves/>}/>
    </Routes>
  )
}

export default Pages