
import './app.css'

import React from "react";
import Menu from '../components/layouts/menu'
import Content from "../components/layouts/content"
import { BrowserRouter as Router } from 'react-router-dom';

export default props => (
    <div className="app">
        <Router>
            <Menu></Menu>
            <Content></Content>

        </Router>
    </div>
)

