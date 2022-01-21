
import './app.css'

import React from "react";
import Menu from '../components/layouts/menu'
import Content from "../components/layouts/content"

export default props => (
    <div className="app">
        <Menu></Menu>
        <Content></Content>
    </div>
)

