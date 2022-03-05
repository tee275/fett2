import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from "./Component/Login/Login"
import Home from "./Component/Home/Home"

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/Home' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App