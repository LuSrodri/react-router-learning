
import './content.css'

import React from "react";
import { Routes, Route } from 'react-router-dom';

import About from "../../views/examples/about"
import Home from "../../views/examples/home"

export default props => (
    <main className="content">
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
        </Routes>
    </main>
)

