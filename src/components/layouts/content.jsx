
import './content.css'

import React from "react";
import { Routes, Route } from 'react-router-dom';

import About from "../../views/examples/about"
import Home from "../../views/examples/home"
import Params from "../../views/examples/params"
import NotFound from "../../views/examples/notFound"

export default props => (
    <main className="content">
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/params/:number" element={<Params></Params>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
    </main>
)

